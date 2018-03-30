import getMemberCardFrom from '../search/memberCard.js';
import surveyResponses from '../data/surveyResponses';
import { config } from '../utils/helpers.js';

const sendMemberCardCallback = (resp, bot) => {
  const text = getMemberCardFrom(surveyResponses, resp.data);
  const { message_id, chat } = resp.message;
  const inline_keyboard = [[{ text: '\u{1F448} Back', callback_data: 'back' }]];
  const reply_markup = { inline_keyboard };
  const optns = { message_id, reply_markup, ...config, chat_id: chat.id };
  bot.editMessageText(text, optns);
};

export default sendMemberCardCallback;
