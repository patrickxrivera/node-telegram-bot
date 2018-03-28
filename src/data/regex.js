import surveyResponses from './surveyResponses.js';

const getNamesRegex = (responses) => {
  const names = getNames(responses);
  const regex = new RegExp(names, 'gi');
  return regex;
};

const getNames = (responses) =>
  responses.map((response) => response.name).join('|');

const namesRegex = getNamesRegex(surveyResponses);

const regex = {
  start: /\/start/,
  role: /By role/,
  roles: /(Engineers|Designers|Product Managers|Investors|Marketers|Founders)/,
  person: namesRegex
};

export default regex;
