import reduce from 'lodash/reduce';

const links = new Set();

links.add('Linkedin');
links.add('Facebook');
links.add('Twitter');
links.add('Instagram');

const emojis = {
  Role: '\u{1F604}',
  Specialties: '\u{1F604}',
  Learning: '\u{1F604}',
  Linkedin: '\u{1F604}',
  Facebook: '\u{1F604}',
  Instagram: '\u{1F604}',
  Twitter: '\u{1F604}',
  Email: '\u{1F604}',
  Cell: '\u{1F604}'
};

export const getPersonViz = (responses, name) => {
  const targetPerson = getTargetPerson(responses, name);
  const viz = concatAttributesFor(targetPerson);
  return viz;
};

const getTargetPerson = (responses, name) =>
  responses.filter((response) => response.name === name)[0];

const concatAttributesFor = (person) => {
  const viz = reduce(
    person,
    (result, val, key) => result + getAttribute(key, val),
    ''
  );
  return viz;
};

const getAttribute = (key, val) => {
  if (key === 'timestamp' || key === 'rolecategory') return '';
  if (key === 'name') return `<strong>${val}</strong>\n\n`;

  key = toTitleCase(key);

  const attribute = links.has(key)
    ? getLinkAttribute(key, val)
    : getNonLinkAttribute(key, val);
  const emoji = emojis[key];
  const attributeWithEmoji = `${emoji} ${attribute}`;

  return attributeWithEmoji;
};

const getLinkAttribute = (key, val) => {
  const linkedText = key.link(val);
  return `${linkedText}\n`;
};

const getNonLinkAttribute = (key, val) => `${key}: ${val}\n\n`;

const toTitleCase = (word) => word[0].toUpperCase() + word.slice(1);
