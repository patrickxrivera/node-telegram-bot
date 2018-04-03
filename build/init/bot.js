'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _nodeTelegramBotApi = require('node-telegram-bot-api');

var _nodeTelegramBotApi2 = _interopRequireDefault(_nodeTelegramBotApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initBot = function initBot() {
  return isProdEnv() ? Prod.init() : Dev.init();
};

var isProdEnv = function isProdEnv() {
  return process.env.NODE_ENV === 'production';
};

var BotSettings = {
  token: null,
  bot: null,

  setToken: function setToken(tokenType) {
    this.token = process.env[tokenType];
  },
  setBot: function setBot() {
    var optns = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    this.bot = new _nodeTelegramBotApi2.default(this.token, optns);
  }
};

var Prod = {
  tokenType: 'PROD_TOKEN',

  init: function init() {
    this.setToken(this.tokenType);
    this.setBot();
    return this.bot;
  }
};

var Dev = {
  tokenType: 'DEV_TOKEN',
  optns: {
    polling: true
  },

  init: function init() {
    this.setToken(this.tokenType);
    this.setBot(this.optns);
    return this.bot;
  }
};

Object.setPrototypeOf(Dev, BotSettings);
Object.setPrototypeOf(Prod, BotSettings);

exports.default = initBot;
//# sourceMappingURL=bot.js.map