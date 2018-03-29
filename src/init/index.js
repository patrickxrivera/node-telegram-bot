import TelegramBot from 'node-telegram-bot-api';

import regex from '../data/regex.js';
import sendStart from '../messages/sendStart.js';
import sendRole from '../messages/sendRole.js';
import sendMemberCard from '../messages/sendMemberCard.js';
import sendSocialLinks from '../messages/sendSocialLinks.js';

const token = '458016821:AAHPDtnHrIDzRZwtpVqJxOPtJlkmgFnZ2P4';

export const initBot = () => new TelegramBot(token, { polling: true });

export const initActions = (bot) => {
  bot.onText(regex.start, (msg) => sendStart(msg, bot));
  bot.onText(regex.roles, (msg) => sendRole(msg, bot));
  bot.onText(regex.member, (msg) => sendMemberCard(msg, bot));
  bot.onText(regex.social, (msg) => sendSocialLinks(msg, bot));
};
