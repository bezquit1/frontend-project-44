import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import json from '@eslint/json'
import markdown from '@eslint/markdown'
import css from '@eslint/css'
import stylistic from '@stylistic/eslint-plugin'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  { 
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'], 
    plugins: { 
      js,
      '@stylistic': stylistic 
    }, 
    extends: ['js/recommended'], 
    languageOptions: { 
      globals: { 
        ...globals.browser, 
        ...globals.node 
      } 
    },
    rules: {
      '@stylistic/semi': ['error', 'never'],
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/indent': ['error', 2],
      '@stylistic/comma-dangle': ['error', 'never']
    }
  },
  tseslint.configs.recommended,
  { 
    files: ['**/*.json'], 
    plugins: { json }, 
    language: 'json/json', 
    extends: ['json/recommended'] 
  },
  { 
    files: ['**/*.jsonc'], 
    plugins: { json }, 
    language: 'json/jsonc', 
    extends: ['json/recommended'] 
  },
  { 
    files: ['**/*.json5'], 
    plugins: { json }, 
    language: 'json/json5', 
    extends: ['json/recommended'] 
  },
  { 
    files: ['**/*.md'], 
    plugins: { markdown }, 
    language: 'markdown/commonmark', 
    extends: ['markdown/recommended'] 
  },
  { 
    files: ['**/*.css'], 
    plugins: { css }, 
    language: 'css/css', 
    extends: ['css/recommended'] 
  }
])
