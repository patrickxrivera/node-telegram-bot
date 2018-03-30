'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _surveyResponses = require('./surveyResponses.js');

var _surveyResponses2 = _interopRequireDefault(_surveyResponses);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getMembersRegex = function getMembersRegex(responses) {
  var members = getMembers(responses);
  var regex = new RegExp(members, 'gi');
  return regex;
};

var getMembers = function getMembers(responses) {
  return responses.map(getName).join('|');
};

var getName = function getName(response) {
  return response.name.trim();
};

var membersRegex = getMembersRegex(_surveyResponses2.default);

var regex = {
  start: /(\/start|\/role)/,
  social: /(\/twitter|\/linkedin|\/instagram|\/facebook)/,
  roles: /(\/engineers|\/designers|\/product_managers|\/investors|\/marketers|\/founders|Engineers|Designers|Product Managers|Investors|Marketers|Founders)/,
  back: /Back/,
  members: membersRegex
};

exports.default = regex;
//# sourceMappingURL=regex.js.map