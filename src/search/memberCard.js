import reduce from 'lodash/reduce';

import attributes from '../utils/attributes.js';
import links from '../data/links.js';
import { toTitleCase } from '../utils/helpers.js';

const getMemberCardFrom = (responses, name) => {
  const targetMember = getTargetMember(responses, name);
  const card = concatAttributesFor(targetMember);
  return card;
};

const getTargetMember = (responses, name) =>
  responses.filter((response) => response.name.trim() === name)[0];

const concatAttributesFor = (person) => {
  const card = reduce(
    person,
    (result, val, key) => result + getAttribute(key, val),
    ''
  );
  return card;
};

const getAttribute = (key, val) => {
  key = toTitleCase(key);

  const data = { key, val };
  const format = attributes[key].format;
  const formattedCard = format(data);

  return formattedCard;
};

export default getMemberCardFrom;
