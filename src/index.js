import initBot from './utils/init.js';
import regex from './data/regex.js';
import surveyResponses from './data/surveyResponses.js';
import sendStart from './messages/sendStart.js';
import sendRole from './messages/sendRole.js';
import sendMemberCard from './messages/sendMemberCard.js';
import sendSocialLinks from './messages/sendSocialLinks.js';
import { getPeopleByRole } from './search/byRole.js';
import { getSelectedRole } from './utils/helpers.js';

const bot = initBot();

bot.onText(regex.start, (msg) => sendStart(msg, bot));
bot.onText(regex.roles, (msg) => sendRole(msg, bot));
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
