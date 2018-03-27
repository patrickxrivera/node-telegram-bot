'use strict';

var _nodeTelegramBotApi = require('node-telegram-bot-api');

var _nodeTelegramBotApi2 = _interopRequireDefault(_nodeTelegramBotApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var token = '458016821:AAHPDtnHrIDzRZwtpVqJxOPtJlkmgFnZ2P4';
var bot = new _nodeTelegramBotApi2.default(token, { polling: true });

bot.on('message', function (msg) {
  var Hi = 'hi';
  if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
    bot.sendMessage(msg.chat.id, 'Hello dear user');
  }

  var bye = 'bye';
  if (msg.text.toString().toLowerCase().includes(bye)) {
    bot.sendMessage(msg.chat.id, 'Hope to see you around again , Bye');
  }
});