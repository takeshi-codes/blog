module.exports = {
  globals: {
    __PATH_PREFIX__: true,
    tw: true,
  },
  parser: 'babel-eslint',
  extends: [
    `react-app`,
    `eslint:recommended`,
    `plugin:react/recommended`,
    `plugin:prettier/recommended`,
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
};
