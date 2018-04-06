import surveyResponses from '../data/surveyResponses.js';
import getMemberCardFrom from '../search/memberCard.js';
import { getIdFrom, config } from '../utils/helpers.js';

const sendMemberCard = (msg, bot) => {
  const member = msg.text;
  const id = getIdFrom(msg);
  const text = getMemberCardFrom(member, surveyResponses);
  bot.sendMessage(id, text, config);
};

export default sendMemberCard;
