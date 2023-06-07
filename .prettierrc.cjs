/** @type {import('prettier').Config} */
const config = {
  arrowParens: 'always',
  printWidth: 120,
  singleQuote: true,
  jsxSingleQuote: true,
  semi: true,
  trailingComma: 'all',
  tabWidth: 2,
  quoteProps: 'consistent',
  plugins: ['@ianvs/prettier-plugin-sort-imports'],
};

module.exports = config;
