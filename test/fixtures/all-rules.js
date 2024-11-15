import configBase from '../../index.js';
import configBrowser from '../../browser.js';
import configTest from '../../tests.js';
import configVue from '../../vue.js';
import configTypescript from '../../typescript.js';

export default [
	configBase,
	configBrowser,
	configTest,
	...configVue,
	configTypescript
];
