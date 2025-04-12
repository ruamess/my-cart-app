// eslint-disable-next-line no-undef
module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: [
    'prettier',
    'react',
    'react-native',
    '@typescript-eslint',
    'eslint-plugin-react-compiler',
    'eslint-plugin-simple-import-sort',
  ],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  rules: {
    // Import sort
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // 1. Group for all imports that include "react"
          ['^.*react.*$'],
          // 2. Imports from third-party packages (modules from node_modules)
          ['^@?\\w'],
          // 3. Side effect imports (e.g., polyfills)
          ['^\\u0000'],
          // 4. Absolute imports (if applicable, e.g., for internal modules)
          ['^'],
          // 5. Relative imports from parent directories
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          // 6. Relative imports from the current directory
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
        ],
      },
    ],
    'simple-import-sort/exports': 'error',

    // React Native
    'react-native/no-unused-styles': 0,
    'react-native/split-platform-components': 2,
    'react-native/no-inline-styles': 2,
    'react-native/no-color-literals': 2,
    'react-native/no-raw-text': 2,
    'react-native/no-single-element-style-arrays': 2,
    'react-native/sort-styles': 'error',

    // React Hooks
    'react-hooks/exhaustive-deps': 'off',

    // Prettier
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        useTabs: false,
        semi: false,
        trailingComma: 'all',
        bracketSpacing: true,
        printWidth: 100,
        endOfLine: 'auto',
      },
    ],

    // TypeScript
    '@typescript-eslint/no-empty-function': [
      'off',
      {
        allow: [],
      },
    ],
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',

    // React Compiler
    'react-compiler/react-compiler': 'error',
  },
}
