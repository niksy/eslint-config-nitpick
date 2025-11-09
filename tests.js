import globals from 'globals';
import pluginMocha from 'eslint-plugin-mocha';
import pluginPromise from 'eslint-plugin-promise';
import { defineConfig } from 'eslint/config';

export default defineConfig({
	languageOptions: {
		globals: {
			...globals.mocha
		}
	},
	plugins: {
		mocha: pluginMocha,
		promise: pluginPromise
	},
	rules: {
		'promise/always-return': 0,
		'mocha/no-exclusive-tests': 1,
		'mocha/no-skipped-tests': 1,
		'mocha/no-pending-tests': 1,
		'mocha/handle-done-callback': 2,
		'mocha/no-synchronous-tests': 0,
		'mocha/no-global-tests': 0,
		'mocha/no-return-and-callback': 2,
		'mocha/valid-test-description': 1,
		'mocha/valid-suite-description': [1, '^[A-Z]'],
		'mocha/no-sibling-hooks': 1,
		'mocha/no-mocha-arrows': 2,
		'mocha/no-hooks': 0,
		'mocha/no-hooks-for-single-case': 0,
		'mocha/no-top-level-hooks': 0,
		'mocha/no-identical-title': 2,
		'mocha/max-top-level-suites': 0,
		'mocha/no-nested-tests': 2,
		'mocha/no-setup-in-describe': 0,
		'mocha/no-async-describe': 2,
		'mocha/no-return-from-async': 1,
		'mocha/no-exports': 2,
		'mocha/prefer-arrow-callback': 0,
		'mocha/no-empty-description': 2,
		'mocha/consistent-spacing-between-blocks': 1,
		'no-console': 0,
		'no-invalid-this': 0,
		'max-nested-callbacks': [1, 5]
	}
});
