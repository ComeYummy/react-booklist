module.exports = {
  plugins: ['stylelint-order'],
  extends: [
    'stylelint-config-standard',
    './node_modules/prettier-stylelint/config.js',
  ],
  ignoreFiles: ['**/node_modules/**', 'src/styles/**'],
  rules: {
    indentation: 2,
    'string-quotes': 'single',
    'order/properties-alphabetical-order': true,
    'declaration-empty-line-before': null,
    'no-empty-source': null,
  },
};
