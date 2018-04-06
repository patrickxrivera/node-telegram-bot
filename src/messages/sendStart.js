import formatInline from '../utils/inlineKeyboard.js';
import roles from '../data/roles.js';
import { getIdFrom, getNameFrom } from '../utils/helpers.js';
import { getStartText } from '../utils/text.js';

const sendStart = (msg, bot) => {
  const id = getIdFrom(msg);
  const name = getNameFrom(msg);
  const text = getStartText(name);
  const formattedRoles = formatInline(roles);
  const optns = {
    reply_markup: {
      inline_keyboard: formattedRoles
    }
  };
  bot.sendMessage(id, text, optns);
};

export default sendStart;
