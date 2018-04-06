import getMemberCardFrom from '../search/memberCard.js';
import surveyResponses from '../data/surveyResponses';
import { config, getBackBtnFor } from '../utils/helpers.js';

const sendMemberCardCallback = (resp, bot) => {
  const text = getMemberCardFrom(resp.data, surveyResponses);
  const optns = getOptnsFrom(resp);
  bot.editMessageText(text, optns);
};

const getOptnsFrom = (resp) => {
  const { message_id, chat } = resp.message;
  const lastView = 'roles';
  const backBtn = getBackBtnFor(lastView);
  const reply_markup = { inline_keyboard: backBtn };
  const optns = { message_id, reply_markup, ...config, chat_id: chat.id };
  return optns;
};

export default sendMemberCardCallback;
