import TelegramBot from 'node-telegram-bot-api';

import regex from './data/regex.js';
import surveyResponses from './data/surveyResponses.js';
import sendSocialLinks from './messages/sendSocialLinks.js';
import sendMemberCard from './messages/sendMemberCard.js';
import { getPeopleByRole } from './search/byRole.js';
import {
  getIdFrom,
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
      inline_keyboard: [
        [
          {
            text: 'Engineers',
            callback_data: 'Engineers'
          },
          {
            text: 'Investors',
            callback_data: 'Investors'
          }
        ]
      ]
    }
  });
});

bot.onText(regex.roles, (msg) => {
  const id = getIdFrom(msg);
  const role = getSelectedRole(msg);
  const text = `Nice! \u{1F64C} ${role}s are pretty awesome. \n\nNow select a person to search`;
  const peopleByRole = getPeopleByRole(surveyResponses, role);
  const optns = {
    reply_markup: {
      keyboard: peopleByRole
    }
  };

  bot.sendMessage(id, text, optns);
});

bot.onText(regex.member, (msg) => sendMemberCard(msg, bot));
bot.onText(regex.social, (msg) => sendSocialLinks(msg, bot));

bot.on('callback_query', (resp) => {
  const role = getSelectedRole(resp.data);
  const text = `Nice! \u{1F64C} ${role}s are pretty awesome. \n\nNow select a person to search`;
  const searchOptions = getPeopleByRole(surveyResponses, role);

  const reply_markup = {
    inline_keyboard: [
      [
        {
          text: 'John Smith',
          callback_data: 'Hello'
        },
        { text: 'James Doe', callback_data: 'Hi' }
      ]
    ]
  };
  const { message_id, chat } = resp.message;
  const chat_id = chat.id;
  const optns = { message_id, chat_id, reply_markup };
  bot.editMessageText(text, optns);
});
