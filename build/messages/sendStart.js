'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ramda = require('ramda');

var _inlineKeyboard = require('../utils/inlineKeyboard.js');

var _inlineKeyboard2 = _interopRequireDefault(_inlineKeyboard);

var _roles = require('../data/roles.js');

var _roles2 = _interopRequireDefault(_roles);

var _helpers = require('../utils/helpers.js');

var _text = require('../utils/text.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var formatMarkup = function formatMarkup(roles) {
  return { reply_markup: { inline_keyboard: roles } };
};

var getOptns = (0, _ramda.pipe)(_inlineKeyboard2.default, formatMarkup);

var getWelcomeText = (0, _ramda.pipe)(_helpers.getNameFrom, _text.getStartText);

var sendStart = function sendStart(msg, bot) {
  var id = (0, _helpers.getIdFrom)(msg);
  var text = getWelcomeText(msg);
  var optns = getOptns(_roles2.default);
  bot.sendMessage(id, text, optns);
};

exports.default = sendStart;
//# sourceMappingURL=sendStart.js.map