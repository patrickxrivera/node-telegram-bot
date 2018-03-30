'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inlineKeyboard = require('../utils/inlineKeyboard.js');

var _inlineKeyboard2 = _interopRequireDefault(_inlineKeyboard);

var _roles = require('../data/roles.js');

var _roles2 = _interopRequireDefault(_roles);

var _helpers = require('../utils/helpers.js');

var _text = require('../utils/text.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sendStart = function sendStart(msg, bot) {
  var id = (0, _helpers.getIdFrom)(msg);
  var name = (0, _helpers.getNameFrom)(msg);
  var text = (0, _text.getStartText)(name);
  var formattedRoles = (0, _inlineKeyboard2.default)(_roles2.default);
  var optns = {
    reply_markup: {
      inline_keyboard: formattedRoles
    }
  };
  bot.sendMessage(id, text, optns);
};

exports.default = sendStart;
//# sourceMappingURL=sendStart.js.map