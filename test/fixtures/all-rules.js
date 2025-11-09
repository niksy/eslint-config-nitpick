import { defineConfig } from 'eslint/config';
import configBase from '../../index.js';
import configBrowser from '../../browser.js';
import configTest from '../../tests.js';
import configVue from '../../vue.js';
import configTypescript from '../../typescript.js';

export default defineConfig([configBase, configBrowser, configTest, configVue, configTypescript]);
