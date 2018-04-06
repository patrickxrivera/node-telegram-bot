import { pipe, filter, map, sort, curry } from 'ramda';

import assignInlineFormatTo from '../utils/inlineKeyboard.js';

const aToZ = (a, b) => b < a;

const getName = (response) => response.name.trim();

const byRole = curry((targetRole, response) =>
  response.rolecategory.includes(targetRole)
);

const filterMembers = (targetRole, responses) =>
  pipe(
    filter(byRole(targetRole)),
    map(getName),
    sort(aToZ),
    assignInlineFormatTo
  )(responses);

const getMembersByRole = (targetRole, responses) => {
  responses = [...responses]; // limit side effects by not mutating responses
  const filteredMembers = filterMembers(targetRole, responses);
  return filteredMembers;
};

export default getMembersByRole;
