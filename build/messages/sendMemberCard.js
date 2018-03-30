'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _surveyResponses = require('../data/surveyResponses.js');

var _surveyResponses2 = _interopRequireDefault(_surveyResponses);

var _memberCard = require('../search/memberCard.js');

var _memberCard2 = _interopRequireDefault(_memberCard);

var _helpers = require('../utils/helpers.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sendMemberCard = function sendMemberCard(msg, bot) {
  var member = msg.text;
  var id = (0, _helpers.getIdFrom)(msg);
  var text = (0, _memberCard2.default)(_surveyResponses2.default, member);
  bot.sendMessage(id, text, _helpers.config);
};

exports.default = sendMemberCard;
//# sourceMappingURL=sendMemberCard.js.map