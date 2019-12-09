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
    'node/file-extension-in-import': [2, 'always', { '.js': 'never' }],

    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-exports-assign.md
    'node/no-exports-assign': 2,

    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-missing-import.md
    'node/no-missing-import': 2,

    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-missing-require.md
    'node/no-missing-require': 2,

    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unsupported-features/es-builtins.md
    'node/no-unsupported-features/es-builtins': 2,

    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unsupported-features/node-builtins.md
    'node/no-unsupported-features/node-builtins': 2,

    // https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-deprecated-api.md
    'node/no-deprecated-api': 2,
  },
};
