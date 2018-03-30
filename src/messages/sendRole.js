import surveyResponses from '../data/surveyResponses.js';
import getMembersByRole from '../search/byRole.js';
import { getIdFrom, getSelectedRole, getBackBtnFor } from '../utils/helpers.js';
import { getRoleText } from '../utils/text.js';

const sendRole = (msg, bot) => {
  const id = getIdFrom(msg);
  const roleData = getRoleDataFrom(msg.text);
  const { text, reply_markup } = roleData;
  const optns = { reply_markup };
  bot.sendMessage(id, text, optns);
};

export const getRoleDataFrom = (req) => {
  const role = getSelectedRole(req);
  const text = getRoleText(role);
  const reply_markup = getReplyMarkup(role);
  const roleData = { text, reply_markup };
  return roleData;
};

const getReplyMarkup = (role) => {
  const membersByRole = getMembersByRole(surveyResponses, role);
  const lastView = 'start';
  const backBtn = getBackBtnFor(lastView);
  const inline_keyboard = [...membersByRole, ...backBtn];
  const reply_markup = { inline_keyboard };
  return reply_markup;
};

export default sendRole;
