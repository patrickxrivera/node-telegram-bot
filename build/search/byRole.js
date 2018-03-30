'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inlineKeyboard = require('../utils/inlineKeyboard.js');

var _inlineKeyboard2 = _interopRequireDefault(_inlineKeyboard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getMembersByRole = function getMembersByRole(responses, targetRole) {
  responses = responses.slice(); // don't mutate responses
  var memberNames = filterMembers(responses, targetRole);
  var formattedMembers = (0, _inlineKeyboard2.default)(memberNames);
  return formattedMembers;
};

var filterMembers = function filterMembers(responses, targetRole) {
  return responses.filter(function (response) {
    return filterByRole(response, targetRole);
  }).map(getName);
};

var filterByRole = function filterByRole(response, targetRole) {
  return response.rolecategory.includes(targetRole);
};

var getName = function getName(response) {
  return response.name.trim();
};

exports.default = getMembersByRole;
//# sourceMappingURL=byRole.js.map