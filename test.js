// Run: node test.js
require('./srs.js');
require('./questions-ch1.js');
require('./questions-ch2.js');
require('./questions-ch3.js');
require('./questions-ch4.js');
require('./questions-ch5.js');
require('./questions-ch6.js');
require('./cards.js');
const assert = require('assert');
const { SRS, DATA } = globalThis;
const D = SRS.DAY, now = new Date(2026, 10, 10, 9).getTime();

// Leitner: right moves up a box, wrong goes back to box 1 and stays due today
let s = SRS.emptyState();
SRS.gradeCard(s, 'a', true, now);
assert.equal(s.cards.a.box, 1);
assert.equal(s.cards.a.due, SRS.today(now) + D);
SRS.gradeCard(s, 'a', true, now + D);
assert.equal(s.cards.a.box, 2);
SRS.gradeCard(s, 'a', false, now + 3 * D);
assert.equal(s.cards.a.box, 1);
assert.equal(s.cards.a.due, SRS.today(now + 3 * D));

// New cards are capped per day
const cards = Array.from({ length: 30 }, (_, i) => ({ id: 'c' + i }));
s = SRS.emptyState();
assert.equal(SRS.dueCards(s, cards, now).length, 10);
for (let i = 0; i < 10; i++) SRS.gradeCard(s, 'c' + i, true, now);
assert.equal(SRS.dueCards(s, cards, now).length, 0);
assert.equal(SRS.dueCards(s, cards, now + D).length, 20); // 10 due + 10 new

// Error notebook: out after 2 right in a row, a miss resets
s = SRS.emptyState();
SRS.gradeQuestion(s, 'q', false, now);
SRS.gradeQuestion(s, 'q', true, now);
SRS.gradeQuestion(s, 'q', false, now);
SRS.gradeQuestion(s, 'q', true, now);
assert.ok('q' in s.wrong);
SRS.gradeQuestion(s, 'q', true, now);
assert.ok(!('q' in s.wrong));
SRS.gradeQuestion(s, 'other', true, now);
assert.ok(!('other' in s.wrong));

// Streak survives until you study today
s = SRS.emptyState();
SRS.gradeQuestion(s, 'x', true, now - 2 * D);
SRS.gradeQuestion(s, 'x', true, now - D);
assert.equal(SRS.streak(s, now), 2);
SRS.gradeQuestion(s, 'x', true, now);
assert.equal(SRS.streak(s, now), 3);

// Exam respects the chapter distribution
const qs = Object.keys(SRS.EXAM_DIST).flatMap(ch => Array.from({ length: 20 }, (_, i) => ({ id: ch + '-' + i, ch: +ch, opts: ['a', 'b', 'c', 'd'], a: 0 })));
const exam = SRS.buildExam(qs);
assert.equal(exam.length, 40);
assert.equal(exam.filter(q => q.ch === 4).length, 11);

// Shuffled options keep pointing at the same correct text
for (const q of DATA.questions) for (let n = 0; n < 5; n++) {
  const m = SRS.mix(q);
  assert.equal(m.opts[m.a], q.opts[q.a]);
  assert.deepEqual(m.opts.slice().sort(), q.opts.slice().sort());
}

// Content sanity
const ids = new Set();
for (const q of DATA.questions) {
  assert.ok(!ids.has(q.id), 'duplicate id ' + q.id); ids.add(q.id);
  assert.equal(q.opts.length, 4, q.id);
  assert.ok(q.a >= 0 && q.a < 4, q.id);
  assert.ok(q.exp && q.ref && q.lo, q.id);
}
assert.equal(SRS.buildExam(DATA.questions).length, 40);
for (const q of DATA.questions) {
  assert.ok(DATA.chapters[q.ch] && q.id.startsWith(q.ch + '-'), q.id);
  assert.equal(new Set(q.opts).size, 4, q.id);
  assert.ok(!/(opção|alternativa|letra) [A-D]|respectivamente|das anteriores/i.test(q.q + q.exp), q.id);
}
for (const c of DATA.cards) assert.ok(c.id && c.term && c.def, 'card ' + c.id);
assert.equal(new Set(DATA.cards.map(c => c.id)).size, DATA.cards.length);
assert.equal(new Set(DATA.cards.map(c => c.term.toLowerCase())).size, DATA.cards.length);

console.log('ok', DATA.questions.length, 'questions,', DATA.cards.length, 'cards');
