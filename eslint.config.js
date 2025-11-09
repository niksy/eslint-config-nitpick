import { defineConfig, globalIgnores } from 'eslint/config';
import configPrettier from 'eslint-config-prettier';
import pluginPrettier from 'eslint-plugin-prettier';
import pluginUnicorn from 'eslint-plugin-unicorn';
import pluginImport from 'eslint-plugin-import';
import configTest from './tests.js';
import configBase from './index.js';

export default defineConfig([
	configBase,
	configPrettier,
	{
		plugins: {
			prettier: pluginPrettier,
			unicorn: pluginUnicorn,
			import: pluginImport
		},
		rules: {
			'prettier/prettier': 1,
			'unicorn/prefer-module': 0,
			'import/no-commonjs': 0
		}
	},
	{
		files: ['*.js'],
		plugins: {
			unicorn: pluginUnicorn
		},
		rules: {
			'unicorn/prevent-abbreviations': [
				1,
				{
					'allowList': {
						'env': true,
						'props': true,
						'prev': true,
						'ignoreRefs': true
					}
				}
			]
		}
	},
	{
		files: ['test/**'],
		extends: [configTest],
		plugins: {
			unicorn: pluginUnicorn,
			import: pluginImport
		},
		rules: {
			'unicorn/prefer-module': 2,
			'import/no-commonjs': 2
		}
	},
	globalIgnores(['**/test/fixtures/*.config.*'])
]);
