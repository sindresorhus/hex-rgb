'use strict';

var hexChars = 'a-f\\d';
var match3or4Hex = "#?[".concat(hexChars, "]{3}[").concat(hexChars, "]?");
var match6or8Hex = "#?[".concat(hexChars, "]{6}([").concat(hexChars, "]{2})?");
var nonHexChars = new RegExp("[^#".concat(hexChars, "]"), 'gi');
var validHexSize = new RegExp("^".concat(match3or4Hex, "$|^").concat(match6or8Hex, "$"), 'i');

module.exports = function (hex) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (typeof hex !== 'string' || nonHexChars.test(hex) || !validHexSize.test(hex)) {
    throw new TypeError('Expected a valid hex string');
  }

  hex = hex.replace(/^#/, '');
  var alpha = 255;

  if (hex.length === 8) {
    alpha = parseInt(hex.slice(6, 8), 16) / 255;
    hex = hex.substring(0, 6);
  }

  if (hex.length === 4) {
    alpha = parseInt(hex.slice(3, 4).repeat(2), 16) / 255;
    hex = hex.substring(0, 3);
  }

  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }

  var num = parseInt(hex, 16);
  var red = num >> 16;
  var green = num >> 8 & 255;
  var blue = num & 255;
  return options.format === 'array' ? [red, green, blue, alpha] : {
    red: red,
    green: green,
    blue: blue,
    alpha: alpha
  };
};