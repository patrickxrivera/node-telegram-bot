import map from 'lodash/map';

export const getPersonViz = (responses, name) => {
  const targetPerson = getTargetPerson(responses, name);
  const viz = getVizFor(targetPerson);
  return viz;
};

const getTargetPerson = (responses, name) =>
  responses.filter((response) => response.name === name)[0];

const getVizFor = (person) => {
  let result = '';

  map(person, (val, key) => {
    key = toTitleCase(key);
    if (key !== 'Timestamp' && key !== 'Role') {
      result += `${key}: ${val}\n\n`;
    }
  });

  //
  // Object.entries(person).forEach((item) => {
  //   let [key, val] = item;
  //   key = toTitleCase(key);
  //   if (key !== 'Timestamp' && key !== 'Role') {
  //     result += `${key}: ${val}\n\n`;
  //   }
  // });

  return result;
};

const toTitleCase = (word) => word[0].toUpperCase() + word.slice(1);
