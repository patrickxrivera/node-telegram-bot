import surveyResponses from './surveyResponses.js';

const getMembersRegex = (responses) => {
  const members = getMembers(responses);
  const regex = new RegExp(members, 'gi');
  return regex;
};

const getMembers = (responses) => responses.map(getName).join('|');

const getName = (response) => response.name.trim();

const membersRegex = getMembersRegex(surveyResponses);

const regex = {
  start: /(\/start|\/role)/,
  social: /(\/twitter|\/linkedin|\/instagram|\/facebook)/,
  roles: /(\/engineers|\/designers|\/product_managers|\/investors|\/marketers|\/founders|Engineers|Designers|Product Managers|Investors|Marketers|Founders)/,
  member: membersRegex
};

export default regex;
