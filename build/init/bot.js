'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _nodeTelegramBotApi = require('node-telegram-bot-api');

var _nodeTelegramBotApi2 = _interopRequireDefault(_nodeTelegramBotApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initBot = function initBot() {
  return isProdEnv() ? setProdBot() : setDevBot();
};

var isProdEnv = function isProdEnv() {
  return process.env.NODE_ENV === 'production';
};

var setProdBot = function setProdBot() {
  var token = process.env.PROD_TOKEN;
  var bot = new _nodeTelegramBotApi2.default(token);
  bot.setWebHook(process.env.HEROKU_URL + bot.token);
  return bot;
};

var setDevBot = function setDevBot() {
  var token = process.env.DEV_TOKEN;
  var bot = new _nodeTelegramBotApi2.default(token, { polling: true });
  return bot;
};

exports.default = initBot;
//# sourceMappingURL=bot.js.map