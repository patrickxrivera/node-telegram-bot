'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ramda = require('ramda');

var _inlineKeyboard = require('../utils/inlineKeyboard.js');

var _inlineKeyboard2 = _interopRequireDefault(_inlineKeyboard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

var aToZ = function aToZ(a, b) {
  return b < a;
};

var getName = function getName(response) {
  return response.name.trim();
};

var byRole = (0, _ramda.curry)(function (targetRole, response) {
  return response.rolecategory.includes(targetRole);
});

var getMembersByRole = function getMembersByRole(targetRole, _ref) {
  var _ref2 = _toArray(_ref),
      responses = _ref2.slice(0);

  return (0, _ramda.pipe)((0, _ramda.filter)(byRole(targetRole)), (0, _ramda.map)(getName), (0, _ramda.sort)(aToZ), _inlineKeyboard2.default)(responses);
};

exports.default = getMembersByRole;
//# sourceMappingURL=byRole.js.map