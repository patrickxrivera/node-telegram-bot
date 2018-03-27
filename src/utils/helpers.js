import surveyResponses from '../data/surveyResponses.js';

export const getPeopleByRole = (responses, targetRole) => {
  responses = responses.slice(); // don't mutate responses

  const people = responses
    .filter((response) => filterByRole(response, targetRole))
    .map(getName);

  const formattedArray = formatArray(people);

  return formattedArray;
};

const filterByRole = (response, targetRole) =>
  response.role.includes(targetRole);

const getName = (response) => response.name.trim();

const formatArray = (people) => {
  let formattedArray = [];

  while (people.length) {
    const row = people.splice(0, 3);
    formattedArray = [...formattedArray, row];
  }

  return formattedArray;
};
