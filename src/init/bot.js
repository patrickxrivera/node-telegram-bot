import TelegramBot from 'node-telegram-bot-api';

const initBot = () => {
  const token = process.env.TOKEN;
  let bot;

  if (isProdEnv()) {
    bot = new TelegramBot(token);
    bot.setWebHook(process.env.HEROKU_URL + bot.token);
  } else {
    bot = new TelegramBot(token, { polling: true });
  }

  console.log('Bot server started in the ' + process.env.NODE_ENV + ' mode');

  return bot;
};

const isProdEnv = () => process.env.NODE_ENV === 'production';

export default initBot;
