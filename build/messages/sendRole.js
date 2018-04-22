'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRoleDataFrom = undefined;

var _surveyResponses = require('../data/surveyResponses.js');

var _surveyResponses2 = _interopRequireDefault(_surveyResponses);

var _byRole = require('../search/byRole.js');

var _byRole2 = _interopRequireDefault(_byRole);

var _helpers = require('../utils/helpers.js');

var _text = require('../utils/text.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var sendRole = function sendRole(msg, bot) {
  var id = (0, _helpers.getIdFrom)(msg);
  var roleData = getRoleDataFrom(msg.text);
  var text = roleData.text,
      reply_markup = roleData.reply_markup;

  var optns = { reply_markup: reply_markup };
  bot.sendMessage(id, text, optns);
};

var getRoleDataFrom = exports.getRoleDataFrom = function getRoleDataFrom(req) {
  var role = (0, _helpers.getSelectedRole)(req);
  var text = (0, _text.getRoleText)(role);
  var reply_markup = getReplyMarkup(role);
  var roleData = { text: text, reply_markup: reply_markup };
  return roleData;
};

var getReplyMarkup = function getReplyMarkup(role) {
  var membersByRole = (0, _byRole2.default)(role, _surveyResponses2.default);
  var lastView = 'start';
  var backBtn = (0, _helpers.getBackBtnFor)(lastView);
  var inline_keyboard = [].concat(_toConsumableArray(membersByRole), _toConsumableArray(backBtn));
  var reply_markup = { inline_keyboard: inline_keyboard };
  return reply_markup;
};

exports.default = sendRole;
//# sourceMappingURL=sendRole.js.map