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

hexRgb('#4183c488');
//=> {red: 65, green: 131, blue: 196, alpha: 136}

hexRgb('#0008');
//=> {red: 0, green: 0, blue: 0, alpha: 136}

hexRgb('#4183c488', {format: 'array'});
//=> [65, 131, 196, 136]
```


## Related

See [rgb-hex](https://github.com/sindresorhus/rgb-hex) for the inverse.


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
