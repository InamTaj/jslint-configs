module.exports = {
  'extends': './config-base.js',
  'plugins': [
    'import',
    'react',
    'jest',
  ],
  'env': {
    'browser': true,
    'es6': true,
    'jest/globals': true,
  },
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: [
          'node_modules',
          'src',
        ],
        'extensions': [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
        ],
      },
      react: {
        version: 'detect',
      },
    },
  },
  'rules': {
    // React
    'jsx-quotes': [2, 'prefer-single'],
    'react/display-name': 0,
    'react/jsx-boolean-value': 1,
    'react/jsx-closing-bracket-location': 1,
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    'react/jsx-max-props-per-line': [2, {
      'maximum': 1,
      'when': 'always',
    } ],
    'react/jsx-no-undef': 2,
    'react/jsx-sort-prop-types': 0,
    'react/jsx-sort-props': 0,
    'react/jsx-uses-react': 1,
    'react/jsx-uses-vars': 1,
    'react/jsx-indent': [2, 2 ],
    'react/no-did-mount-set-state': 2,
    'react/no-did-update-set-state': 2,
    'react/no-multi-comp': 2,
    'react/no-unknown-property': 2,
    'react/prop-types': 2,
    'react/react-in-jsx-scope': 2,
    'react/self-closing-comp': ['error', {
      'component': true,
      'html': false,
    } ],
    'react/sort-comp': 2,
    'react/jsx-wrap-multilines': 2,
    'react/jsx-curly-spacing': [2, {
      'when': 'always',
      'children': true,
      'spacing': {
        'objectLiterals': 'never',
      },
    } ],
    'react/jsx-no-bind': [2, {
      'ignoreRefs': false,
      'allowArrowFunctions': true,
      'allowFunctions': false,
      'allowBind': true,
    } ],
  },
};
