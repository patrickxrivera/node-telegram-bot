import { pipe, filter, map, sort, curry } from 'ramda';

import formatInline from '../utils/inlineKeyboard.js';

const aToZ = (a, b) => b < a;

const getName = (response) => response.name.trim();

const byRole = curry((targetRole, response) =>
  response.rolecategory.includes(targetRole)
);

const getMembers = (targetRole, responses) =>
  pipe(filter(byRole(targetRole)), map(getName), sort(aToZ), formatInline)(
    responses
  );

const getMembersByRole = (targetRole, responses) => {
  responses = [...responses]; // limit side effects by not mutating responses
  const members = getMembers(targetRole, responses);
  return members;
};

export default getMembersByRole;
