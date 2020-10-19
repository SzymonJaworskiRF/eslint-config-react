module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: [
    'better-styled-components',
    'eslint-plugin-redux-saga',
    'jest-dom',
    'react',
    'react-hooks',
    'testing-library',
  ],
  extends: [
    ...[
      './rules/better-styled-components',
      './rules/jest-dom',
      './rules/react',
      './rules/react-hooks',
      './rules/testing-library',
    ].map((path) => require.resolve(path)),
    '@sjrf/eslint-config-base',
    'plugin:redux-saga/all',
  ],
}
