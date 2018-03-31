'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _nodeTelegramBotApi = require('node-telegram-bot-api');

var _nodeTelegramBotApi2 = _interopRequireDefault(_nodeTelegramBotApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initBot = function initBot() {
  var token = process.env.TOKEN;
  var bot = void 0;

  if (isProdEnv()) {
    bot = new _nodeTelegramBotApi2.default(token);
    bot.setWebHook(process.env.HEROKU_URL + bot.token);
  } else {
    bot = new _nodeTelegramBotApi2.default(token, { polling: true });
  }

  return bot;
};

var isProdEnv = function isProdEnv() {
  return process.env.NODE_ENV === 'production';
};

exports.default = initBot;
//# sourceMappingURL=bot.js.map