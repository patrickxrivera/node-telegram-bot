import TelegramBot from 'node-telegram-bot-api';

import regex from './data/regex.js';
import surveyResponses from './data/surveyResponses.js';
import getMemberSocialLinksFor from './search/memberSocialLinks';
import getMemberCard from './search/memberCard.js';
import { getPeopleByRole } from './search/byRole.js';
import {
  getSelectedRole,
  getSelectedSocialPlatform,
  config
} from './utils/helpers.js';

const token = '458016821:AAHPDtnHrIDzRZwtpVqJxOPtJlkmgFnZ2P4';
const bot = new TelegramBot(token, { polling: true });

bot.onText(regex.start, (msg) => {
  const name = msg.chat.first_name;
  const resp = `Welcome, ${name} \u{1F604}
  \nSearch for a community member from the following options or type your search directly.`;
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
  const role = getSelectedRole(msg);
  const resp = `Nice! \u{1F64C} ${role}s are pretty awesome. \n\nNow select a person to search`;
  const searchOptions = getPeopleByRole(surveyResponses, role);

  bot.sendMessage(msg.chat.id, resp, {
    reply_markup: {
      keyboard: searchOptions
    }
  });
});

bot.onText(regex.person, (msg) => {
  const name = msg.text;
  const resp = getMemberCard(surveyResponses, name);

  bot.sendMessage(msg.chat.id, resp, config);
});

bot.onText(regex.social, (msg) => {
  const platform = getSelectedSocialPlatform(msg);
  const resp = getMemberSocialLinksFor(surveyResponses, platform);

  bot.sendMessage(msg.chat.id, resp, config);
});
