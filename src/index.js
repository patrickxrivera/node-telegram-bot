import regex from './data/regex.js';
import surveyResponses from './data/surveyResponses.js';
import { initBot, initActions } from './init/';
import { getRoleDataFrom } from './messages/sendRole.js';

const bot = initBot();
initActions(bot);

bot.on('callback_query', (resp) => {
  if (isRole(regex, resp)) {
    const roleData = getRoleDataFrom(resp.data);
    const { text, reply_markup } = roleData;
    const { message_id, chat } = resp.message;
    const chat_id = chat.id;
    const optns = { message_id, chat_id, reply_markup };
    bot.editMessageText(text, optns);
  }
});

const isRole = (regex, text) => Boolean(text.data.match(regex.roles));
