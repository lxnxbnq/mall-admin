module.exports = {
  env: {
    es6: true,
    node: true
  },
  root: true,
  extends: [
    'eslint:recommended', // eslint默认规则
    'plugin:@typescript-eslint/eslint-recommended' // ts默认规则
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'no-var': 2,
    'consistent-return': 1,
    'default-case': 1,
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "warn"
  },
};
