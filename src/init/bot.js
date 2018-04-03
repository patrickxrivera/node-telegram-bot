import TelegramBot from 'node-telegram-bot-api';

const initBot = () => (isProdEnv() ? Prod.init() : Dev.init());

const isProdEnv = () => process.env.NODE_ENV === 'production';

export const Bot = {
  token: null,
  setToken(token) {
    this.token = process.env[token];
  }
};

export const Dev = {
  init() {
    this.setToken('DEV_TOKEN');
    this.setupBot();
    return this.bot;
  },
  setupBot() {
    this.bot = new TelegramBot(this.token, { polling: true });
  }
};

export const Prod = {
  init() {
    this.setToken('PROD_TOKEN');
    this.setupBot();
    return this.bot;
  },
  setupBot() {
    this.bot.setWebHook(process.env.HEROKU_URL + this.token);
  }
};

Object.setPrototypeOf(Dev, Bot);
Object.setPrototypeOf(Prod, Bot);

export default initBot;
