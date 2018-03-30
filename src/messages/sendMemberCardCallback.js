import getMemberCardFrom from '../search/memberCard.js';
import surveyResponses from '../data/surveyResponses';
import { config } from '../utils/helpers.js';

const sendMemberCardCallback = (resp, bot) => {
  const text = getMemberCardFrom(surveyResponses, resp.data);
  const { message_id, chat } = resp.message;
  const chat_id = chat.id;
  const optns = { message_id, chat_id, ...config };
  bot.editMessageText(text, optns);
};

export default sendMemberCardCallback;
