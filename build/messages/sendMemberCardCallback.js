'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _memberCard = require('../search/memberCard.js');

var _memberCard2 = _interopRequireDefault(_memberCard);

var _surveyResponses = require('../data/surveyResponses');

var _surveyResponses2 = _interopRequireDefault(_surveyResponses);

var _helpers = require('../utils/helpers.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sendMemberCardCallback = function sendMemberCardCallback(resp, bot) {
  var text = (0, _memberCard2.default)(resp.data, _surveyResponses2.default);
  var optns = getOptnsFrom(resp);
  bot.editMessageText(text, optns);
};

var getOptnsFrom = function getOptnsFrom(resp) {
  var _resp$message = resp.message,
      message_id = _resp$message.message_id,
      chat = _resp$message.chat;

  var lastView = 'roles';
  var backBtn = (0, _helpers.getBackBtnFor)(lastView);
  var reply_markup = { inline_keyboard: backBtn };
  var optns = _extends({ message_id: message_id, reply_markup: reply_markup }, _helpers.config, { chat_id: chat.id });
  return optns;
};

exports.default = sendMemberCardCallback;
//# sourceMappingURL=sendMemberCardCallback.js.map