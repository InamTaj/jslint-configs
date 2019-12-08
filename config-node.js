module.exports = {
  'extends': [
    './config-base.js',
  ],
  'plugins': [
    'import',
    'react',
    'jest',
    'node',
  ],
  'env': {
    'node': true,
    'es6': true,
    'jest': true,
  },
  'rules': {
    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/file-extension-in-import.md
    'node/file-extension-in-import': [2, 'always'],
  },
};
