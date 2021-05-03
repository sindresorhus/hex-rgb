import {expectType} from 'tsd';
import hexRgb, {RgbaObject, RgbaTuple} from './index.js';

expectType<RgbaObject>(hexRgb('#cd2222cc'));
expectType<RgbaTuple>(hexRgb('#cd2222cc', {format: 'array'}));
expectType<RgbaTuple>(hexRgb('#cd2222cc', {format: 'array', alpha: 0.5}));
expectType<string>(hexRgb('#cd2222cc', {format: 'css'}));
expectType<RgbaObject>(hexRgb('#cd2222cc', {format: 'object'}));
