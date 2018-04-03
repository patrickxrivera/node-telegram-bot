import TelegramBot from 'node-telegram-bot-api';

const initBot = () => (isProdEnv() ? Prod.init() : Dev.init());

const isProdEnv = () => process.env.NODE_ENV === 'production';

const BotSettings = {
  token: null,
  bot: null,

  setToken(tokenType) {
    this.token = process.env[tokenType];
  },

  setBot(optns) {
    this.bot = new TelegramBot(this.token, optns);
  }
};

const Prod = {
  tokenType: 'PROD_TOKEN',

  init() {
    this.setToken(this.tokenType);
    this.setBot();
    return this.bot;
  }
};

const Dev = {
  tokenType: 'DEV_TOKEN',
  optns: {
    polling: true
  },

  init() {
    this.setToken(this.tokenType);
    this.setBot(this.optns);
    return this.bot;
  }
};

Object.setPrototypeOf(Dev, BotSettings);
Object.setPrototypeOf(Prod, BotSettings);

export default initBot;
