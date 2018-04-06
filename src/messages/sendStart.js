import { pipe } from 'ramda';

import formatInline from '../utils/inlineKeyboard.js';
import roles from '../data/roles.js';
import { getIdFrom, getNameFrom } from '../utils/helpers.js';
import { getStartText } from '../utils/text.js';

const formatMarkup = (roles) => ({ reply_markup: { inline_keyboard: roles } });

const getOptns = pipe(formatInline, formatMarkup);

const getWelcomeText = pipe(getNameFrom, getStartText);

const sendStart = (msg, bot) => {
  const id = getIdFrom(msg);
  const text = getWelcomeText(msg);
  const optns = getOptns(roles);
  bot.sendMessage(id, text, optns);
};

export default sendStart;
