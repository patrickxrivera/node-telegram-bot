'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initEnv = function initEnv() {
  return _dotenv2.default.config();
};

exports.default = initEnv;
//# sourceMappingURL=env.js.map