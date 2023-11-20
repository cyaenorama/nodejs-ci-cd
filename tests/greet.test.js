const greet = require('../src/greet');

test('Message to be equal to "Greetings from Docker!"', () => {
  expect(greet('Docker')).toBe('Greetings from Docker!');
});
