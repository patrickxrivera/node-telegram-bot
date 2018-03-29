import surveyResponses from '../data/surveyResponses.js';
import getMemberSocialLinksFor from '../search/memberSocialLinks';
import { getSelectedSocialPlatform, config } from '../utils/helpers.js';

const sendSocialLinks = (msg, bot) => {
  const { id } = msg.chat;
  const platform = getSelectedSocialPlatform(msg);
  const text = getMemberSocialLinksFor(surveyResponses, platform);
  bot.sendMessage(id, text, config);
};

export default sendSocialLinks;
