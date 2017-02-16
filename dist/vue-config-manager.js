/*!
 * vue-config-manager v0.0.1
 * (c) 2017 Jonas Kuiler
 * Released under the MIT License.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.VueConfigManager = global.VueConfigManager || {})));
}(this, (function (exports) { 'use strict';

function helloworld() {
  return 'hello world!';
}

exports.helloworld = helloworld;

Object.defineProperty(exports, '__esModule', { value: true });

})));
