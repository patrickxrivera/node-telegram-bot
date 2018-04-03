'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _text = require('../utils/text');

var _helpers = require('../utils/helpers');

var sendCommands = function sendCommands(msg, bot) {
  var id = (0, _helpers.getIdFrom)(msg);
  var text = (0, _text.getCommandsText)();
  bot.sendMessage(id, text, _helpers.config);
};

exports.default = sendCommands;
//# sourceMappingURL=sendCommands.js.map