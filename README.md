# eslint-config-niksy

[![Build Status][ci-img]][ci]

[ESLint][eslint] config for my projects.

## Installation

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

## License

MIT © [Ivan Nikolić](http://ivannikolic.com)

[ci]: https://travis-ci.org/niksy/eslint-config-niksy
[ci-img]: https://img.shields.io/travis/niksy/eslint-config-niksy/master.svg
[eslint]: http://eslint.org/
