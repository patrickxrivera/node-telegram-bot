import assignInlineFormatTo from '../utils/inlineKeyboard.js';

const getMembersByRole = (responses, targetRole) => {
  responses = responses.slice(); // don't mutate responses
  const memberNames = filterMembers(responses, targetRole);
  const formattedMembers = assignInlineFormatTo(memberNames);
  return formattedMembers;
};

export const filterMembers = (responses, targetRole) =>
  responses
    .filter((response) => filterByRole(response, targetRole))
    .map(getName)
    .sort();

const filterByRole = (response, targetRole) => response.rolecategory.includes(targetRole);

const getName = (response) => response.name.trim();

export default getMembersByRole;
