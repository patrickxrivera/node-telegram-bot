import regex from '../data/regex';
import sendStart from '../messages/sendStart';
import sendCommands from '../messages/sendCommands';
import sendRole from '../messages/sendRole';
import sendMemberCard from '../messages/sendMemberCard';
import sendSocialLinks from '../messages/sendSocialLinks';
import handleCallback from '../utils/handleCallback';
import { callbackQuery } from '../utils/helpers';

const initActions = (bot) => {
  // TODO
  bot.onText(regex.start, (msg) => sendStart(msg, bot));
  bot.onText(regex.commands, (msg) => sendCommands(msg, bot));
  bot.onText(regex.roles, (msg) => sendRole(msg, bot));
  bot.onText(regex.members, (msg) => sendMemberCard(msg, bot));
  bot.onText(regex.social, (msg) => sendSocialLinks(msg, bot));
  bot.on(callbackQuery, (resp) => handleCallback(resp, bot));
};

export default initActions;
