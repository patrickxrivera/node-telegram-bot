import regex from './data/regex.js';
import surveyResponses from './data/surveyResponses.js';
import { initBot, initActions } from './init/';
import { getPeopleByRole } from './search/byRole.js';
import { getSelectedRole } from './utils/helpers.js';
import { getRoleText } from './utils/text.js';

const bot = initBot();
initActions(bot);

bot.on('callback_query', (resp) => {
  if (resp.data === 'Engineers') {
    console.log('YOU CLICKED ENGINEERS');
    const role = getSelectedRole(resp.data);
    const text = getRoleText(role);
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
  }
});
