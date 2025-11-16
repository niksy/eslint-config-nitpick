import pluginJsdoc from 'eslint-plugin-jsdoc';
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
		}
	}
]);
