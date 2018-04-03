import surveyResponses from '../data/surveyResponses.js';
import getMemberSocialLinksFor from '../search/memberSocialLinks';
import { getSelectedSocialPlatform, getBackBtnFor, config } from '../utils/helpers.js';

const sendSocialLinks = (msg, bot) => {
  const { id } = msg.chat;
  const platform = getSelectedSocialPlatform(msg);
  const text = getMemberSocialLinksFor(surveyResponses, platform);
  const optns = getOptns();
  bot.sendMessage(id, text, optns);
};

const getOptns = () => {
  const lastView = 'start';
  const backBtn = getBackBtnFor(lastView);
  const reply_markup = { inline_keyboard: backBtn };
  const optns = { reply_markup, ...config };
  return optns;
};

export default sendSocialLinks;
