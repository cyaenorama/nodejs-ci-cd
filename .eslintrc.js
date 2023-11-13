module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    // 'plugin:node/recommended',
    'plugin:import/recommended',
    'plugin:promise/recommended',
    'plugin:unicorn/recommended',
    'plugin:eslint-comments/recommended',
    // 'plugin:jsdoc/recommended',
    'airbnb-base',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'plugin:prettier/recommended'
  ],
  env: {
    node: true,
    es2024: true,
    jest: true,
    'jest/globals': true
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      impliedStrict: true,
      globalReturn: false
    }
  },
  rules: {
    'class-methods-use-this': 'warn',
    'consistent-return': 'off',
    'eslint-comments/disable-enable-pair': ['error', { allowWholeFile: true }],
    'func-names': ['error', 'as-needed'],
    'import/extensions': ['error', 'ignorePackages', { js: 'never' }],
    'import/no-extraneous-dependencies': 'warn',
    'import/prefer-default-export': 'off',
    'no-console': 'off',
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-underscore-dangle': [
      'warn',
      {
        allowAfterThis: true,
        allowAfterSuper: true,
        allowAfterThisConstructor: true
      }
    ],
    'no-void': ['error', { allowAsStatement: true }],
    'promise/param-names': 'warn',
    'unicorn/catch-error-name': 'off',
    'unicorn/no-array-for-each': 'off',
    'unicorn/no-for-loop': 'off',
    'unicorn/no-process-exit': 'off',
    'unicorn/no-static-only-class': 'off',
    'unicorn/no-typeof-undefined': 'off',
    'unicorn/numeric-separators-style': 'off',
    'unicorn/prefer-module': 'off',
    'unicorn/prefer-ternary': 'off',
    'unicorn/prefer-top-level-await': 'off',
    'unicorn/prevent-abbreviations': 'off'
  }
};
