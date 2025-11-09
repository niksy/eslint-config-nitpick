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
import { defineConfig } from 'eslint/config';
import configNitpick from 'eslint-config-nitpick';

export default defineConfig([
	configNitpick
]);
```

<!-- prettier-ignore-end -->

If you’re using [presets](#presets), **it’s highly recommended to apply default preset:**

<!-- prettier-ignore-start -->

```js
import { defineConfig } from 'eslint/config';
import configNitpick from 'eslint-config-nitpick';
import configPreset from 'eslint-config-nitpick/other-preset';

export default defineConfig([
	configNitpick,
	configPreset
]);
```

<!-- prettier-ignore-end -->

## Presets

In addition to default preset, there are also specific presets.

### Browser

Browser specific rules.

<!-- prettier-ignore-start -->

```js
import { defineConfig } from 'eslint/config';
import configBrowser from 'eslint-config-nitpick/browser';

export default defineConfig([
	configBrowser
]);
```

<!-- prettier-ignore-end -->

### Testing

Rules for testing frameworks (e.g. Mocha).

<!-- prettier-ignore-start -->

```js
import { defineConfig } from 'eslint/config';
import configTest from 'eslint-config-nitpick/tests';

export default defineConfig([
	configTest
]);
```

<!-- prettier-ignore-end -->

### Vue

Vue specific rules.

<!-- prettier-ignore-start -->

```js
import { defineConfig } from 'eslint/config';
import configVue from 'eslint-config-nitpick/vue';

export default defineConfig([
	configVue
]);
```

<!-- prettier-ignore-end -->

### TypeScript

TypeScript specific rules.

<!-- prettier-ignore-start -->

```js
import { defineConfig } from 'eslint/config';
import configTypescript from 'eslint-config-nitpick/typescript';

export default defineConfig([
	configTypescript
]);
```

<!-- prettier-ignore-end -->

## License

MIT © [Ivan Nikolić](http://ivannikolic.com)

<!-- prettier-ignore-start -->

[ci]: https://github.com/niksy/eslint-config-nitpick/actions?query=workflow%3ACI
[ci-img]: https://github.com/niksy/eslint-config-nitpick/actions/workflows/ci.yml/badge.svg?branch=master

<!-- prettier-ignore-end -->
