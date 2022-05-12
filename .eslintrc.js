/* eslint-env node, commonjs */
module.exports = {
  env: {
    es2021: true
  },
  extends: ['plugin:prettier/recommended', 'plugin:vue/essential', 'standard'],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint']
}
