module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended'
  ],
  plugins: ['react', 'react-hooks', 'jsx-a11y', 'prettier', 'unused-imports'],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'prettier/prettier': 'error',
    "unused-imports/no-unused-imports": "error",

  },

  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@src', './src'],
          ['@router', './src/router'],
          ['@modules', './src/modules'],
          ['@constants', './src/constants'],
          ['@ui', './src/ui'],
          ['@theme', './src/theme'],
        ],
        extensions: ['.ts', '.js', '.jsx', '.json']
      }
    }
  }
};
