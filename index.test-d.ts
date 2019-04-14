import {expectType} from 'tsd';
import hexRgb = require('.');

expectType<hexRgb.RgbaObject>(hexRgb('#cd2222cc'));
expectType<hexRgb.RgbaTuple>(hexRgb('#cd2222cc', {format: 'array'}));
