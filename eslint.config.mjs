import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import css from '@eslint/css';
import pluginPrettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    // Sólo aplica en estos ficheros:
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    plugins: {
      js,
      prettier: pluginPrettier,
      react: pluginReact,
    },
    languageOptions: {
      globals: globals.browser,
    },
    settings: {
      react: { version: 'detect' }, // detecta tu versión de React automáticamente
    },
    rules: {
      // activa reglas de Prettier como errores
      ...pluginPrettier.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
    },
    extends: [
      'js/recommended', // @eslint/js
      prettierConfig, // para que Prettier no choque con ESLint
      tseslint.configs.recommended, // TypeScript
      pluginReact.configs.flat.recommended, // React
    ],
  },

  {
    files: ['**/*.css'],
    plugins: { css },
    language: 'css/css',
    extends: ['css/recommended'],
  },
]);
