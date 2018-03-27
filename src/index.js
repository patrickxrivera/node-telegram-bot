import TelegramBot from 'node-telegram-bot-api';
import { getPeopleByRole } from './utils/helpers.js';
import surveyResponses from './data/surveyResponses.js';

const token = '458016821:AAHPDtnHrIDzRZwtpVqJxOPtJlkmgFnZ2P4';
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  const name = msg.chat.first_name;
  const resp = `Welcome, ${name} \u{1F604}
  \nSearch for a community member from the following options or type your search directly.`;
  const searchOptions = [['Role'], ['Interests']];

  bot.sendMessage(msg.chat.id, resp, {
    reply_markup: {
      keyboard: searchOptions
    }
  });
});

bot.onText(/Role/, (msg) => {
  const resp = 'Choose which role you would like to search';
  const searchOptions = [
    ['Engineers', 'Designers', 'Product Managers'],
    ['Investors', 'Marketers', 'Founders']
  ];

  bot.sendMessage(msg.chat.id, resp, {
    reply_markup: {
      keyboard: searchOptions
    }
  });
});

bot.onText(/Engineers/, (msg) => {
  const resp = 'Select who you would like to search';
  const role = getSelectedRole(msg);
  const searchOptions = getPeopleByRole(surveyResponses, role);

  console.log({ role, searchOptions });

  bot.sendMessage(msg.chat.id, resp, {
    reply_markup: {
      keyboard: searchOptions
    }
  });
});

const getSelectedRole = (msg) => {
  return msg.text.slice(0, -1);
};

// const isWord = (msg, word) => {
//   return msg.text.toString().indexOf(word) === 0;
// };
//
// const getReqFrom = (msg) => msg.text.toString();
//
// bot.on('message', (msg) => {
//   const req = getReqFrom(msg);
//   bot.sendMessage(msg.from.id, `You selected ${req}`);
// });
