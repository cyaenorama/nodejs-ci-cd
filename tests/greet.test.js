const greet = require('../src/greet');

test('Message to be equal to "Greetings, Docker!!!"', () => {
  expect(greet('Docker')).toBe('Greetings, Docker!!!');
});
