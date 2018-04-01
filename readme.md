# hex-rgb [![Build Status](https://travis-ci.org/sindresorhus/hex-rgb.svg?branch=master)](https://travis-ci.org/sindresorhus/hex-rgb)

> Convert HEX color to RGBA


## Install

```
$ npm install hex-rgb
```


## Usage

```js
const hexRgb = require('hex-rgb');

hexRgb('4183c4');
//=> {red: 65, green: 131, blue: 196, alpha: 255}

hexRgb('#4183c4');
//=> {red: 65, green: 131, blue: 196, alpha: 255}

hexRgb('#fff');
//=> {red: 255, green: 255, blue: 255, alpha: 255}

hexRgb('#22222299');
//=> {red: 65, green: 131, blue: 196, alpha: 0.6}

hexRgb('#cd2222cc');
//=> {red: 0, green: 0, blue: 0, alpha: 0.8}

hexRgb('#cd2222cc', {format: 'array'});
//=> [65, 131, 196, 0.8]
```


## Related

See [rgb-hex](https://github.com/sindresorhus/rgb-hex) for the inverse.


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
