# eslint-config-niksy

[![Build Status][ci-img]][ci]

[ESLint][eslint] config for my projects.

## Install

```sh
npm install eslint eslint-config-niksy --save-dev
```

## Usage

Add this config to your `.eslintrc`:

```json
{
	"extends": [
		"niksy"
	]
}
```

## Presets

In addition to default preset, there are also specific presets. You can apply
multiple presets with [ESLint `extends` option][eslint-extends].

**It’s highly recommended to apply default preset:**

```json
{
	"extends": [
		"niksy",
		"niksy/other-preset"
	]
}
```

### Browser

Browser specific rules.

```json
{
	"extends": [
		"niksy/browser"
	]
}
```

### ES2015

Advanced ES2015 specific rules.

```json
{
	"extends": [
		"niksy/es2015"
	]
}
```

### Testing

Rules for testing frameworks (e.g. Mocha).

```json
{
	"extends": [
		"niksy/tests"
	]
}
```

### React

React specific rules.

```json
{
	"extends": [
		"niksy/react"
	]
}
```

### Vue

Vue specific rules.

```json
{
	"extends": [
		"niksy/vue"
	]
}
```

## License

MIT © [Ivan Nikolić](http://ivannikolic.com)

[ci]: https://travis-ci.org/niksy/eslint-config-niksy
[ci-img]: https://travis-ci.org/niksy/eslint-config-niksy.svg?branch=master
[eslint]: http://eslint.org/
[eslint-extends]: http://eslint.org/docs/user-guide/configuring#extending-configuration-files
