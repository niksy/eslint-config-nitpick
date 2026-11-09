import pluginJsdoc from 'eslint-plugin-jsdoc';
import pluginImport from 'eslint-plugin-import-x';
import parserTypescript from '@typescript-eslint/parser';
import { defineConfig } from 'eslint/config';

export default defineConfig([
	{
		plugins: {
			jsdoc: pluginJsdoc
		},
		settings: {
			jsdoc: {
				mode: 'typescript'
			}
		},
		rules: {
			'dot-notation': 0,
			'jsdoc/require-returns': 0,
			'jsdoc/require-throws': 0,
			'jsdoc/require-hyphen-before-param-description': 0,
			'jsdoc/check-syntax': 0
		}
	},
	{
		files: ['**/*.ts'],
		languageOptions: {
			parser: parserTypescript
		},
		plugins: {
			import: pluginImport
		},
		rules: {
			'import/consistent-type-specifier-style': [2, 'prefer-top-level']
		}
	}
]);
