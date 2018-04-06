import { pipe, filter, map, sort, curry } from 'ramda';

import formatInline from '../utils/inlineKeyboard.js';

const aToZ = (a, b) => b < a;

const getName = (response) => response.name.trim();

const byRole = curry((targetRole, response) =>
  response.rolecategory.includes(targetRole)
);

const getMembersByRole = (targetRole, [...responses]) =>
  pipe(filter(byRole(targetRole)), map(getName), sort(aToZ), formatInline)(
    responses
  );

export default getMembersByRole;
