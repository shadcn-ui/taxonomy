module.exports = {
    env: {
      browser: true,
      es2021: true,
      node: true,
    },
    ignorePatterns: ['wagmi/generated.ts'],
    plugins: [
      '@typescript-eslint',
      'simple-import-sort',
      'unused-imports',
      'sona',
    ],
    extends: [
      'eslint:recommended',
      'next',
      'next/core-web-vitals',
      'plugin:@typescript-eslint/recommended',
      'prettier',
      'plugin:storybook/recommended',
    ],
    rules: {
      'sona/no-process-env': 'error',
      '@next/next/no-img-element': 'off',
      'no-unused-vars': 'off',
      'no-console': 'warn',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      'react/display-name': 'off',
      'react/jsx-curly-brace-presence': [
        'warn',
        {
          props: 'never',
          children: 'never',
        },
      ],
      //#region  //*=========== Unused Import ===========
      '@typescript-eslint/no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'warn',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
      //#endregion  //*======== Unused Import ===========
      //#region  //*=========== Import Sort ===========
      'simple-import-sort/exports': 'warn',
      'simple-import-sort/imports': [
        'warn',
        {
          groups: [
            // ext library & side effect imports
            ['^@?\\w', '^\\u0000'], // {s}css files
            ['^.+\\.s?css$'], // Lib and hooks
            ['^@/lib', '^@/hooks'], // static data
            ['^@/data'], // components
            ['^@/components', '^@/container'], // zustand store
            ['^@/store'], // Other imports
            ['^@/'], // relative paths up until 3 level
            [
              '^\\./?$',
              '^\\.(?!/?$)',
              '^\\.\\./?$',
              '^\\.\\.(?!/?$)',
              '^\\.\\./\\.\\./?$',
              '^\\.\\./\\.\\.(?!/?$)',
              '^\\.\\./\\.\\./\\.\\./?$',
              '^\\.\\./\\.\\./\\.\\.(?!/?$)',
            ],
            ['^@/types'], // other that didnt fit in
            ['^'],
          ],
        },
      ], //#endregion  //*======== Import Sort ===========
    },
    globals: {
      React: true,
      JSX: true,
    },
  };
  