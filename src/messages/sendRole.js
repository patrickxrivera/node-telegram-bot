import surveyResponses from '../data/surveyResponses.js';
import getMembersByRole from '../search/byRole.js';
import { getIdFrom, getSelectedRole } from '../utils/helpers.js';
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
  const membersByRole = getMembersByRole(surveyResponses, role);
  const backBtn = [[{ text: 'Back', callback_data: 'start' }]];
  const inline_keyboard = [...membersByRole, ...backBtn];
  const reply_markup = { inline_keyboard };
  return { text, reply_markup };
};

export default sendRole;
