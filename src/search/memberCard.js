import { pipe, curry, filter, head, reduce, toPairs } from 'ramda';

import attributes from '../utils/attributes.js';
import links from '../data/links.js';
import { toTitleCase } from '../utils/helpers.js';

const pluckFormat = (key) => attributes[key].format;

const getFormattedCard = (key, data) => pluckFormat(key)(data);

const getAttribute = (acc, [key, val]) => {
  key = toTitleCase(key);

  const data = { key, val };
  const formattedCard = getFormattedCard(key, data);

  return acc + formattedCard;
};

const getTargetMember = curry(
  (name, response) => response.name.trim() === name
);

const getMemberCardFrom = (name, responses) =>
  pipe(filter(getTargetMember(name)), head, toPairs, reduce(getAttribute)(''))(
    responses
  );

export default getMemberCardFrom;
