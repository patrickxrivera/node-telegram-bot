'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _sendRole = require('../messages/sendRole.js');

var sendRoleCallback = function sendRoleCallback(resp, bot) {
  var roleData = (0, _sendRole.getRoleDataFrom)(resp.data);
  var text = roleData.text,
      reply_markup = roleData.reply_markup;
  var _resp$message = resp.message,
      message_id = _resp$message.message_id,
      chat = _resp$message.chat;

  var optns = { message_id: message_id, reply_markup: reply_markup, chat_id: chat.id };
  bot.editMessageText(text, optns);
};

exports.default = sendRoleCallback;
//# sourceMappingURL=sendRoleCallback.js.map