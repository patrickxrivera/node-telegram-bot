import TelegramBot from 'node-telegram-bot-api';

import regex from './data/regex.js';
import surveyResponses from './data/surveyResponses.js';
import { getPeopleByRole } from './search/byRole.js';
import { getSelectedRole } from './utils/helpers.js';
import { getPersonViz } from './search/personViz.js';

const token = '458016821:AAHPDtnHrIDzRZwtpVqJxOPtJlkmgFnZ2P4';
const bot = new TelegramBot(token, { polling: true });

bot.onText(regex.start, (msg) => {
  const name = msg.chat.first_name;
  const resp = `Welcome, ${name} \u{1F604}
  \nSearch for a community member from the following options or type your search directly.`;
  const searchOptions = [['By role'], ['By interests']];

  bot.sendMessage(msg.chat.id, resp, {
    reply_markup: {
      keyboard: searchOptions
    }
  });
});

bot.onText(regex.role, (msg) => {
  const resp = 'Choose a role to search';
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

bot.onText(regex.roles, (msg) => {
  const resp = 'Select a person to search';
  const role = getSelectedRole(msg);
  const searchOptions = getPeopleByRole(surveyResponses, role);

  bot.sendMessage(msg.chat.id, resp, {
    reply_markup: {
      keyboard: searchOptions
    }
  });
});

bot.onText(regex.person, (msg) => {
  const name = msg.text;
  const resp = getPersonViz(surveyResponses, name);
  const parseHTML = { parse_mode: 'HTML' };

  bot.sendMessage(msg.chat.id, resp, parseHTML);
});
