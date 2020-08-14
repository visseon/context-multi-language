module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'import/prefer-default-export': 0,
    'no-console': ['error'],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx', '.ts'] }],
    'react/destructuring-assignment': 0,
    'react/forbid-prop-types': 0,
    'react/state-in-constructor': 0,
    'react/jsx-props-no-spreading': 0,
    'newline-before-return': 'error',
    'import/newline-after-import': 0,
    'no-use-before-define': 0,
    'max-len': ['error', { code: 140 }],
    'import/no-extraneous-dependencies': ['error', { packageDir: './' }],
    'react/prop-types': 0,
    'react/jsx-curly-newline': 0,
    'react/static-property-placement': 0,
    '@typescript-eslint/no-unused-vars': [2, { args: 'none' }],
    'react/require-default-props': 0,
    'no-param-reassign': ['error', { props: true, ignorePropertyModificationsForRegex: ['^state'] }],
  },
};
