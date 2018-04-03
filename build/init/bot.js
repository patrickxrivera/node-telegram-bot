'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Prod = exports.Dev = exports.Bot = undefined;

var _nodeTelegramBotApi = require('node-telegram-bot-api');

var _nodeTelegramBotApi2 = _interopRequireDefault(_nodeTelegramBotApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initBot = function initBot() {
  return isProdEnv() ? Prod.init() : Dev.init();
};

var isProdEnv = function isProdEnv() {
  return process.env.NODE_ENV === 'production';
};

var Bot = exports.Bot = {
  token: null,
  setToken: function setToken(token) {
    this.token = process.env[token];
  }
};

var Dev = exports.Dev = {
  init: function init() {
    this.setToken('DEV_TOKEN');
    this.setupBot();
    return this.bot;
  },
  setupBot: function setupBot() {
    this.bot = new _nodeTelegramBotApi2.default(this.token, { polling: true });
  }
};

var Prod = exports.Prod = {
  init: function init() {
    this.setToken('PROD_TOKEN');
    this.setupBot();
    return this.bot;
  },
  setupBot: function setupBot() {
    this.bot.setWebHook(process.env.HEROKU_URL + this.token);
  }
};

Object.setPrototypeOf(Dev, Bot);
Object.setPrototypeOf(Prod, Bot);

exports.default = initBot;
//# sourceMappingURL=bot.js.map