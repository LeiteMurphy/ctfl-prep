// Pure study logic (no DOM) so it can be tested with `node test.js`.
(function (root) {
  const DAY = 86400000;
  // Leitner: box 1..5 -> days until the card comes back after a correct answer
  const INTERVALS = [0, 1, 2, 4, 8, 16];
  const NEW_PER_DAY = 10;
  const ERR_STREAK_TO_CLEAR = 2;
  // Questions per chapter in the real exam (40 total)
  const EXAM_DIST = { 1: 8, 2: 6, 3: 4, 4: 11, 5: 9, 6: 2 };

  const today = (now = Date.now()) => {
    const d = new Date(now);
    return new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
  };

  function emptyState() {
    return { cards: {}, wrong: {}, flagged: {}, days: {}, onboarded: false };
  }

  // Cards due today, then up to NEW_PER_DAY never-seen cards (in given priority order).
  function dueCards(state, allCards, now) {
    const t = today(now);
    const due = allCards.filter(c => state.cards[c.id] && state.cards[c.id].due <= t);
    const newToday = allCards.filter(c => state.cards[c.id] && state.cards[c.id].introduced === t).length;
    const fresh = allCards.filter(c => !state.cards[c.id]).slice(0, Math.max(0, NEW_PER_DAY - newToday));
    return due.concat(fresh);
  }

  function gradeCard(state, id, correct, now) {
    const t = today(now);
    const c = state.cards[id] || { box: 0, introduced: t };
    c.box = correct ? Math.min(5, c.box + 1) : 1;
    c.due = correct ? t + INTERVALS[c.box] * DAY : t; // wrong: back in today's queue
    state.cards[id] = c;
    markActivity(state, now);
  }

  // Any answered question feeds the error notebook: wrong -> in, 2 right in a row -> out.
  function gradeQuestion(state, qid, correct, now) {
    if (!correct) state.wrong[qid] = 0;
    else if (qid in state.wrong && ++state.wrong[qid] >= ERR_STREAK_TO_CLEAR) delete state.wrong[qid];
    markActivity(state, now);
  }

  function markActivity(state, now) {
    const k = today(now);
    state.days[k] = (state.days[k] || 0) + 1;
  }

  // Consecutive days with activity, ending today (or yesterday, so the streak isn't lost before you study).
  function streak(state, now) {
    let t = today(now);
    if (!state.days[t]) t -= DAY;
    let n = 0;
    while (state.days[t]) { n++; t -= DAY; }
    return n;
  }

  function shuffle(a) {
    a = a.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // Copy of a question with options in random order, so the answer position carries no pattern.
  function mix(q) {
    const order = shuffle(q.opts.map((_, i) => i));
    return Object.assign({}, q, { opts: order.map(i => q.opts[i]), a: order.indexOf(q.a) });
  }

  function buildExam(questions) {
    let picked = [];
    for (const ch in EXAM_DIST) picked = picked.concat(shuffle(questions.filter(q => q.ch == ch)).slice(0, EXAM_DIST[ch]));
    return picked.map(mix);
  }

  root.SRS = { INTERVALS, EXAM_DIST, DAY, today, emptyState, dueCards, gradeCard, gradeQuestion, streak, shuffle, mix, buildExam };
})(typeof window !== 'undefined' ? window : globalThis);
