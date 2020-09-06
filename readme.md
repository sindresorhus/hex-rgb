# hex-rgb [![Build Status](https://travis-ci.com/sindresorhus/hex-rgb.svg?branch=master)](https://travis-ci.com/github/sindresorhus/hex-rgb)

> Convert HEX color to RGBA

## Install

```
$ npm install hex-rgb
```

## Usage

```js
const hexRgb = require('hex-rgb');

hexRgb('4183c4');
//=> {red: 65, green: 131, blue: 196, alpha: 1}

hexRgb('#4183c4');
//=> {red: 65, green: 131, blue: 196, alpha: 1}

hexRgb('#fff');
//=> {red: 255, green: 255, blue: 255, alpha: 1}

hexRgb('#22222299');
//=> {red: 34, green: 34, blue: 34, alpha: 0.6}

hexRgb('#0006');
//=> {red: 0, green: 0, blue: 0, alpha: 0.4}

hexRgb('#cd2222cc');
//=> {red: 205, green: 34, blue: 34, alpha: 0.8}

hexRgb('#cd2222cc', {format: 'array'});
//=> [205, 34, 34, 0.8]

hexRgb('#cd2222cc', {format: 'css'});
//=> 'rgb(205 34 34 / 80%)'

hexRgb('#000', {format: 'css'});
//=> 'rgb(0 0 0)'
```

## API

### hexRgb(hex, options?)

#### hex

Type: `string`

The color in HEX format. Leading `#` is optional.

#### options

Type: `object`

##### format

Type: `string`\
Values: `'object' | 'array' | 'css'`\
Defaults: `'object'`

The RGB output format.

Note that when using the `css` format, the value of the alpha channel is rounded to two decimal places.

## Related

See [rgb-hex](https://github.com/sindresorhus/rgb-hex) for the inverse.
