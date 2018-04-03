import TelegramBot from 'node-telegram-bot-api';

const initBot = () => (isProdEnv() ? setProdBot() : setDevBot());

const isProdEnv = () => process.env.NODE_ENV === 'production';

const setProdBot = () => {
  const token = process.env.TOKEN;
  console.log(token);
  const bot = new TelegramBot(token);
  bot.setWebHook(process.env.HEROKU_URL + bot.token);
  return bot;
};

const setDevBot = () => {
  const token = process.env.DEV_TOKEN;
  const bot = new TelegramBot(token, { polling: true });
  return bot;
};

export default initBot;
