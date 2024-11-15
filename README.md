# eslint-config-nitpick

[![Build Status][ci-img]][ci]

[ESLint][eslint] config for my projects.

## Install

```sh
npm install eslint@9 eslint-config-nitpick --save-dev
```

## Usage

Add this config to your `eslint.config.js`:

<!-- prettier-ignore-start -->

```js
import configNitpick from 'eslint-config-nitpick';

export default [
	configNitpick
];
```

<!-- prettier-ignore-end -->

If you’re using [presets](#presets), **it’s highly recommended to apply default
preset:**

<!-- prettier-ignore-start -->

```js
import configNitpick from 'eslint-config-nitpick';
import configPreset from 'eslint-config-nitpick/other-preset';

export default [
	configNitpick,
	configPreset
];
```

<!-- prettier-ignore-end -->

## Presets

In addition to default preset, there are also specific presets.

### Browser

Browser specific rules.

<!-- prettier-ignore-start -->

```js
import configBrowser from 'eslint-config-nitpick/browser';

export default [
	configBrowser
];
```

<!-- prettier-ignore-end -->

### Testing

Rules for testing frameworks (e.g. Mocha).

<!-- prettier-ignore-start -->

```js
import configTest from 'eslint-config-nitpick/tests';

export default [
	configTest
];
```

<!-- prettier-ignore-end -->

### Vue

Vue specific rules.

<!-- prettier-ignore-start -->

```js
import configVue from 'eslint-config-nitpick/vue';

export default [
	...configVue
];
```

<!-- prettier-ignore-end -->

### TypeScript

TypeScript specific rules.

<!-- prettier-ignore-start -->

```js
import configTypescript from 'eslint-config-nitpick/typescript';

export default [
	configTypescript
];
```

<!-- prettier-ignore-end -->

## License

MIT © [Ivan Nikolić](http://ivannikolic.com)

<!-- prettier-ignore-start -->

[ci]: https://github.com/niksy/eslint-config-nitpick/actions?query=workflow%3ACI
[ci-img]: https://github.com/niksy/eslint-config-nitpick/workflows/CI/badge.svg?branch=master
[eslint]: http://eslint.org/

<!-- prettier-ignore-end -->
