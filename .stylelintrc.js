module.exports = {
  plugins: ['stylelint-scss'],
  extends: [
    'stylelint-config-rational-order',
    'stylelint-config-standard-scss',
    'stylelint-config-prettier',
    'stylelint-prettier/recommended',
  ],
  rules: {
    'prettier/prettier': [
      true,
      {
        singleQuote: true,
      },
    ],
    'max-line-length': null,
    'no-descending-specificity': null,
    'font-weight-notation': null,
    'font-family-no-missing-generic-family-keyword': null,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'include',
          'mixin',
          'each',
          'use',
          'forward',
          'if',
          'else',
          'function',
          'return',
          'warn',
          'for',
        ],
      },
    ],
  },
  ignoreFiles: ['**/node_modules/**'],
}
