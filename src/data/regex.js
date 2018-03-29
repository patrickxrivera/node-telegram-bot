import surveyResponses from './surveyResponses.js';

const getNamesRegex = (responses) => {
  const names = getNames(responses);
  const regex = new RegExp(names, 'gi');
  return regex;
};

const getNames = (responses) => responses.map(getName).join('|');

const getName = (response) => response.name.trim();

const namesRegex = getNamesRegex(surveyResponses);

const regex = {
  start: /(\/start|\/role)/,
  social: /(\/twitter|\/linkedin|\/instagram|\/facebook)/,
  roles: /(\/engineers|\/designers|\/product_managers|\/investors|\/marketers|\/founders|Engineers|Designers|Product Managers|Investors|Marketers|Founders)/,
  person: namesRegex
};

export default regex;
