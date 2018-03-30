'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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
  bot.sendMessage(id, text, _helpers.config);
};

exports.default = sendSocialLinks;
//# sourceMappingURL=sendSocialLinks.js.map