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

Default preset works with ES5 environments, but some ES2015 features are
supported (e.g. Promise, let/const, …).

## Presets

In addition to default preset, there are also specific presets. All presets
extend default one.

### Browser

```json
{
	"extends": [
		"niksy/browser"
	]
}
```

### ES2015 support

```json
{
	"extends": [
		"niksy/es2015"
	]
}
```

### Testing

```json
{
	"extends": [
		"niksy/tests"
	]
}
```

## License

MIT © [Ivan Nikolić](http://ivannikolic.com)

[ci]: https://travis-ci.org/niksy/eslint-config-niksy
[ci-img]: https://travis-ci.org/niksy/eslint-config-niksy.svg?branch=master
[eslint]: http://eslint.org/
