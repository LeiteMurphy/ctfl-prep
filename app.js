(function () {
  const app = document.getElementById('app');
  const KEY = 'ctfl-prep-v1';
  const QUIZ_SIZE = 10, EXAM_MIN = 60, PASS = 0.65;
  const LETTERS = 'ABCD';

  let state = SRS.emptyState();
  try { state = Object.assign(state, JSON.parse(localStorage.getItem(KEY)) || {}); } catch (e) { /* private mode / corrupt: start fresh */ }
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {} };

  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const byId = Object.fromEntries(DATA.questions.map(q => [q.id, q]));
  let timer = null;

  function render(html, handlers) {
    clearInterval(timer);
    app.innerHTML = html;
    app.onclick = e => {
      const el = e.target.closest('[data-act]');
      if (el && !el.disabled && handlers[el.dataset.act]) handlers[el.dataset.act](el.dataset.arg, el);
    };
    window.scrollTo(0, 0);
  }
  const top = title => `<div class="top"><button class="link" data-act="home">‹ Início</button><span class="muted">${esc(title)}</span></div>`;

  // ---------- Home ----------
  function home() {
    const due = SRS.dueCards(state, DATA.cards).length;
    const errs = Object.keys(state.wrong).filter(id => byId[id]).length;
    const flags = Object.keys(state.flagged).length;
    const st = SRS.streak(state);
    const doneToday = state.days[SRS.today()] || 0;
    render(`
      <h1>CTFL Prep</h1>
      <div class="panel row spread">
        <div><div class="stat">${st}</div><div class="muted">${st === 1 ? 'dia seguido' : 'dias seguidos'}</div></div>
        <div style="text-align:right"><div class="stat">${doneToday}</div><div class="muted">respostas hoje</div></div>
      </div>
      <button class="btn primary" data-act="cards" ${due ? '' : 'disabled'}>
        ${due ? `Revisar ${due} cards` : 'Cards em dia ✓'}
        <span class="sub">${due ? `cerca de ${Math.max(1, Math.round(due / 3))} min` : 'novos cards aparecem amanhã'}</span>
      </button>
      <button class="btn" data-act="chapters">Quiz por capítulo<span class="sub">${QUIZ_SIZE} questões com explicação na hora</span></button>
      <button class="btn" data-act="errors" ${errs ? '' : 'disabled'}>Revisar erros<span class="sub">${errs ? `${errs} ${errs === 1 ? 'questão' : 'questões'} para dominar` : 'nenhum erro pendente'}</span></button>
      <button class="btn" data-act="examIntro">Simulado completo<span class="sub">40 questões · ${EXAM_MIN} min · 65% para passar</span></button>
      ${flags ? `<button class="link" data-act="flags">Questões marcadas como suspeitas (${flags})</button>` : ''}
      <p class="muted small">${DATA.questions.length} questões · ${DATA.cards.length} cards · Syllabus CTFL v4.0</p>
    `, { cards, chapters, errors, examIntro, flags });
  }

  // ---------- Flashcards ----------
  function cards() {
    if (!state.onboarded) return onboarding(0);
    const queue = SRS.dueCards(state, DATA.cards);
    const total = queue.length;
    let done = 0;
    (function next() {
      const c = queue.shift();
      if (!c) return finished('Cards do dia concluídos', `Você revisou ${done} cards. Os que você acertou voltam sozinhos daqui a alguns dias.`);
      const box = (state.cards[c.id] || { box: 0 }).box;
      const boxes = `<div class="boxes" aria-label="Domínio ${box} de 5">${[1, 2, 3, 4, 5].map(i => `<i class="${i <= box ? 'on' : ''}"></i>`).join('')}</div>`;
      const bar = `${top(`${Math.min(done + 1, total)} de ${total}`)}<div class="progress"><i style="width:${(done / total) * 100}%"></i></div>`;
      const grade = ok => {
        SRS.gradeCard(state, c.id, ok); save();
        if (ok) done++; else queue.push(c); // missed cards come back at the end of this session
        next();
      };
      render(`${bar}
        <button class="panel flash" data-act="flip">
          <span class="term">${esc(c.term)}</span>
          ${c.en ? `<span class="muted">${esc(c.en)}</span>` : ''}
          ${boxes}
          <span class="muted">Tente lembrar a definição, depois toque para virar</span>
        </button>`, {
        home,
        flip: () => render(`${bar}
          <div class="panel flash">
            <span class="term">${esc(c.term)}</span>
            ${c.en ? `<span class="muted">${esc(c.en)}</span>` : ''}
            <p class="def">${esc(c.def)}</p>
            ${boxes}
          </div>
          <p class="muted" style="text-align:center">Você tinha lembrado?</p>
          <div class="two">
            <button class="btn bad" data-act="no">Errei</button>
            <button class="btn good" data-act="yes">Acertei</button>
          </div>`, { home, no: () => grade(false), yes: () => grade(true) })
      });
    })();
  }

  function onboarding(i) {
    const steps = [
      ['1. Tente lembrar', 'Aparece um termo do syllabus. Antes de tocar, diga a definição de cabeça — é esse esforço que fixa a memória.'],
      ['2. Vire o card', 'Toque no card para ver a definição oficial e compare com o que você pensou.'],
      ['3. Seja honesto', 'Marque “Acertei” ou “Errei”. O app decide quando o card volta: o que você erra volta logo, o que você domina some por dias.']
    ];
    render(`${top('Como funcionam os cards')}
      <div class="panel flash"><span class="term">${steps[i][0]}</span><p class="def">${steps[i][1]}</p></div>
      <button class="btn primary" data-act="next">${i < 2 ? 'Continuar' : 'Começar'}</button>`, {
      home,
      next: () => { if (i < 2) return onboarding(i + 1); state.onboarded = true; save(); cards(); }
    });
  }

  // ---------- Quiz (chapter / errors): feedback right after each answer ----------
  function chapters() {
    render(`${top('Quiz por capítulo')}<h2>Escolha um capítulo</h2>` +
      Object.entries(DATA.chapters).map(([ch, name]) => {
        const n = DATA.questions.filter(q => q.ch == ch).length;
        return `<button class="btn" data-act="go" data-arg="${ch}" ${n ? '' : 'disabled'}>${ch}. ${esc(name)}<span class="sub">${n ? n + ' questões' : 'em breve'}</span></button>`;
      }).join(''), {
      home,
      go: ch => quiz(SRS.shuffle(DATA.questions.filter(q => q.ch == ch)).slice(0, QUIZ_SIZE), DATA.chapters[ch])
    });
  }
  const errors = () => quiz(SRS.shuffle(Object.keys(state.wrong).map(id => byId[id]).filter(Boolean)).slice(0, QUIZ_SIZE), 'Revisar erros');

  function questionHtml(q, picked, reveal) {
    return `<div class="row wrap"><span class="tag">${esc(q.lo)}</span><span class="tag">${esc(q.k)}</span></div>
      <p class="qtext">${esc(q.q)}</p>` +
      q.opts.map((o, i) => {
        const cls = reveal ? (i === q.a ? 'right' : i === picked ? 'wrong' : '') : (i === picked ? 'sel' : '');
        return `<button class="btn opt ${cls}" data-act="pick" data-arg="${i}" ${reveal ? 'disabled' : ''}><b>${LETTERS[i]}</b><span>${esc(o)}</span></button>`;
      }).join('');
  }
  const explainHtml = q => `<div class="exp"><p>${esc(q.exp)}</p><p class="muted small">Syllabus, seção ${esc(q.ref)}</p></div>
    <button class="link" data-act="flag" data-arg="${q.id}">${state.flagged[q.id] ? '⚑ Marcada como suspeita (desfazer)' : '⚐ Marcar como suspeita'}</button>`;
  function toggleFlag(id, el) {
    if (state.flagged[id]) delete state.flagged[id]; else state.flagged[id] = 1;
    save();
    el.textContent = state.flagged[id] ? '⚑ Marcada como suspeita (desfazer)' : '⚐ Marcar como suspeita';
  }

  function quiz(list, title) {
    list = list.map(SRS.mix);
    let i = 0, hits = 0;
    (function show(picked) {
      const q = list[i];
      if (!q) return finished(`${hits} de ${list.length} corretas`, hits === list.length ? 'Tudo certo nesta rodada.' : 'As que você errou foram para “Revisar erros”.');
      const answered = picked !== undefined;
      render(`${top(`${title} · ${i + 1}/${list.length}`)}
        <div class="progress"><i style="width:${(i / list.length) * 100}%"></i></div>
        ${questionHtml(q, picked, answered)}
        ${answered ? explainHtml(q) + `<button class="btn primary" data-act="next">${i + 1 < list.length ? 'Próxima' : 'Ver resultado'}</button>` : ''}`, {
        home, flag: toggleFlag,
        pick: a => { a = +a; const ok = a === q.a; if (ok) hits++; SRS.gradeQuestion(state, q.id, ok); save(); show(a); },
        next: () => { i++; show(); }
      });
    })();
  }

  // ---------- Exam: no feedback until the end ----------
  function examIntro() {
    const list = SRS.buildExam(DATA.questions);
    const partial = list.length < 40;
    render(`${top('Simulado')}
      <h2>Simulado completo</h2>
      <div class="panel"><p>${list.length} questões, ${EXAM_MIN} minutos. Você pode pular e voltar. O gabarito aparece só no final. Para passar: ${Math.ceil(list.length * PASS)} acertos (65%).</p></div>
      ${partial ? `<p class="muted">O banco ainda está parcial, então este simulado tem ${list.length} questões em vez de 40.</p>` : ''}
      <button class="btn primary" data-act="start" ${list.length ? '' : 'disabled'}>Começar</button>`, { home, start: () => exam(list) });
  }

  function exam(list) {
    const answers = new Array(list.length).fill(null);
    const end = Date.now() + EXAM_MIN * 60000;
    let i = 0;
    const fmt = ms => { const s = Math.max(0, Math.round(ms / 1000)); return `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`; };
    const finish = () => examResult(list, answers);
    (function show() {
      const q = list[i];
      render(`<div class="top"><span class="muted">Questão ${i + 1} de ${list.length}</span><span class="timer" id="t">${fmt(end - Date.now())}</span></div>
        ${questionHtml(q, answers[i], false)}
        <div class="two">
          <button class="btn center" data-act="prev" ${i ? '' : 'disabled'}>Anterior</button>
          <button class="btn center" data-act="next" ${i + 1 < list.length ? '' : 'disabled'}>Próxima</button>
        </div>
        <div class="grid">${list.map((_, n) => `<button class="${answers[n] !== null ? 'done' : ''} ${n === i ? 'cur' : ''}" data-act="jump" data-arg="${n}" aria-label="Questão ${n + 1}">${n + 1}</button>`).join('')}</div>
        <button class="btn primary" data-act="ask">Finalizar simulado</button>`, {
        pick: a => { answers[i] = +a; show(); },
        prev: () => { i--; show(); }, next: () => { i++; show(); }, jump: n => { i = +n; show(); },
        ask: (_, el) => {
          const left = answers.filter(a => a === null).length;
          if (el.dataset.sure || !left) return finish();
          el.dataset.sure = 1; el.textContent = `Faltam ${left} sem resposta. Toque de novo para finalizar`;
        }
      });
      timer = setInterval(() => {
        const left = end - Date.now(), t = document.getElementById('t');
        if (left <= 0) return finish();
        if (t) t.textContent = fmt(left);
      }, 1000);
    })();
  }

  function examResult(list, answers) {
    let hits = 0; const per = {};
    list.forEach((q, n) => {
      const ok = answers[n] === q.a;
      if (ok) hits++;
      per[q.ch] = per[q.ch] || [0, 0]; per[q.ch][1]++; if (ok) per[q.ch][0]++;
      if (answers[n] !== null) SRS.gradeQuestion(state, q.id, ok); else state.wrong[q.id] = 0;
    });
    save();
    const passed = hits >= Math.ceil(list.length * PASS);
    render(`${top('Resultado')}
      <div class="panel">
        <div class="stat ${passed ? 'result-ok' : 'result-bad'}">${hits} / ${list.length}</div>
        <p>${Math.round((hits / list.length) * 100)}% · ${passed ? 'Aprovado' : 'Abaixo dos 65%'}</p>
      </div>
      <div class="panel">${Object.entries(per).map(([ch, [h, t]]) => `<div class="row spread"><span>${ch}. ${esc(DATA.chapters[ch])}</span><b>${h}/${t}</b></div>`).join('')}</div>
      <h2>Gabarito comentado</h2>
      ${list.map((q, n) => `<div class="panel" style="display:grid;gap:10px"><p class="muted small">Questão ${n + 1} · ${answers[n] === null ? 'sem resposta' : answers[n] === q.a ? 'correta' : 'errada'}</p>${questionHtml(q, answers[n], true)}${explainHtml(q)}</div>`).join('')}
      <button class="btn primary" data-act="home">Voltar ao início</button>`, { home, flag: toggleFlag });
  }

  // ---------- Misc ----------
  function flags() {
    render(`${top('Suspeitas')}<h2>Questões marcadas como suspeitas</h2>
      <p class="muted">Mostre esta lista para corrigirmos o banco de questões.</p>
      ${Object.keys(state.flagged).map(id => `<div class="panel"><b>${esc(id)}</b><p class="small">${esc(byId[id] ? byId[id].q : '(removida)')}</p><button class="link" data-act="un" data-arg="${esc(id)}">Desmarcar</button></div>`).join('')}`, {
      home, un: id => { delete state.flagged[id]; save(); Object.keys(state.flagged).length ? flags() : home(); }
    });
  }
  function finished(title, text) {
    render(`<div class="panel flash"><span class="term">${esc(title)}</span><p class="muted">${esc(text)}</p></div>
      <button class="btn primary" data-act="home">Voltar ao início</button>`, { home });
  }

  home();
})();
