/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')
module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting',
    'plugin:prettier/recommended',
    'plugin:tailwindcss/recommended',
    'plugin:storybook/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    'vue/multi-word-component-names': 'off'
  },
  env: {
    browser: true,
    es2021: true
  },
  plugins: ['tailwindcss'],
  global: {
    describe: true,
    it: true,
    beforeEach: true
  }
}
