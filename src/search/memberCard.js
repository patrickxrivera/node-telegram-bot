import reduce from 'lodash/reduce';
import { pipe, curry, filter, head } from 'ramda';

import attributes from '../utils/attributes.js';
import links from '../data/links.js';
import { toTitleCase } from '../utils/helpers.js';

const getAttribute = (key, val) => {
  key = toTitleCase(key);

  const data = { key, val };
  const format = attributes[key].format;
  const formattedCard = format(data);

  return formattedCard;
};

const concatAttributes = (person) => {
  const card = reduce(
    person,
    (result, val, key) => result + getAttribute(key, val),
    ''
  );
  return card;
};

const getTargetMember = curry(
  (name, response) => response.name.trim() === name
);

const getCard = (name, responses) =>
  pipe(filter(getTargetMember(name)), head, concatAttributes)(responses);

const getMemberCardFrom = (responses, name) => {
  const card = getCard(name, responses);
  return card;
};

export default getMemberCardFrom;
