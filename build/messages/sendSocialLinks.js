'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _surveyResponses = require('../data/surveyResponses.js');

var _surveyResponses2 = _interopRequireDefault(_surveyResponses);

var _memberSocialLinks = require('../search/memberSocialLinks');

var _memberSocialLinks2 = _interopRequireDefault(_memberSocialLinks);

var _helpers = require('../utils/helpers.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sendSocialLinks = function sendSocialLinks(msg, bot) {
  var id = msg.chat.id;

  var platform = (0, _helpers.getSelectedSocialPlatform)(msg);
  var text = (0, _memberSocialLinks2.default)(_surveyResponses2.default, platform);
  var optns = getOptns();
  bot.sendMessage(id, text, optns);
};

var getOptns = function getOptns() {
  var lastView = 'start';
  var backBtn = (0, _helpers.getBackBtnFor)(lastView);
  var reply_markup = { inline_keyboard: backBtn };
  var optns = _extends({ reply_markup: reply_markup }, _helpers.config);
  return optns;
};

exports.default = sendSocialLinks;
//# sourceMappingURL=sendSocialLinks.js.map