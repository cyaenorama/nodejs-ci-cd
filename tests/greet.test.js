const greet = require('../src/greet');

test('Message to be equal to "Welcome, Docker!!!"', () => {
  expect(greet('Docker')).toBe('Welcome, Docker!!!');
});
