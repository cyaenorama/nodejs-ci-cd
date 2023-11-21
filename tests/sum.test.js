const sum = require('../src/sum');

test('Sum of 3 + 4 is: 7', () => {
  expect(sum(3, 4)).toBe(7);
});
