/* eslint-disable max-len */

module.exports = {
  extends: './config-react.js',
  env: {
    es6: true,
    'react-native/react-native': true,
  },
  plugins: [
    'react-native',
  ],
  settings: {
    react: {
      version: 'detect',
    },
    // plugin specific settings are below
    'import/ignore': [
      'node_modules/react-native/index\\.js$',   // ESLint issue: https://github.com/facebook/react-native/issues/28549
    ],
  },
  rules: {
    'react-native/no-color-literals': 2,  // https://github.com/Intellicode/eslint-plugin-react-native/blob/master/docs/rules/no-color-literals.md
    'react-native/no-inline-styles': 2,   // https://github.com/Intellicode/eslint-plugin-react-native/blob/master/docs/rules/no-inline-styles.md
    'react-native/no-raw-text': 2,        // https://github.com/Intellicode/eslint-plugin-react-native/blob/master/docs/rules/no-raw-text.md
    'react-native/no-unused-styles': 2,   // https://github.com/Intellicode/eslint-plugin-react-native/blob/master/docs/rules/no-unused-styles.md
    'react-native/sort-styles': 1,        // https://github.com/Intellicode/eslint-plugin-react-native/blob/master/docs/rules/sort-styles.md
  },
};
