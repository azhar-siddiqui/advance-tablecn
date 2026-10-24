import { defineConfig } from 'vite-plus'

export default defineConfig({
  staged: {
    '*': 'vp check --fix',
  },
  fmt: {
    singleQuote: true,
    semi: false,
  },
  lint: {
    ignorePatterns: ['dist/**', '.next/**', 'node_modules/**'],
    jsPlugins: [{ name: 'vite-plus', specifier: 'vite-plus/oxlint-plugin' }],
    rules: {
      'vite-plus/prefer-vite-plus-imports': 'error',
      'no-console': ['warn', { allow: ['error', 'warn'] }],
      'no-unused-vars': 'error',
    },
    options: { typeAware: true, typeCheck: true },

    overrides: [
      {
        files: ['src/components/**/*.tsx'],
        rules: {},
      },
    ],
  },
})
