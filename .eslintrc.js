module.exports = {
  root: true,
  extends: [
    'airbnb-base',
  ],
  plugins: [
    'html',
  ],
    // add your custom rules here
  rules: {
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      js: 'never',
      vue: 'never',
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
  },
};
