const esModules = [''].join('|');

module.exports = {
  testEnvironment: 'node',
  cacheDirectory: '.jest-cache',
  clearMocks: false,
  collectCoverage: false,
  coverageDirectory: 'coverage',
  moduleFileExtensions: ['js', 'json', 'node'],

  testMatch: [
    '**/?(*.)+(test|spec).js',
    '**/(tests|mocks)/**/*.js',
    '**/__(tests|mocks)__/**/*.js'
  ],
  transform: {
    '^.+\\.js$': 'babel-jest'
  },
  transformIgnorePatterns: [`/node_modules/(?!${esModules})`],
  verbose: true
};
