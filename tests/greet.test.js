const greet = require('../src/greet');

test('Message to be equal to "Welcome, Sayan!"', () => {
  expect(greet('Sayan')).toBe('Welcome, Sayan!');
});
