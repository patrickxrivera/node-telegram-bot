import { pipe, curry, sort, filter, reduce } from 'ramda';

import { toTitleCase } from '../utils/helpers.js';
import { attributes } from '../utils/attributes.js';

// ********************************

const formatLinks = curry((platform, acc, curr) => {
  const link = curr[platform];
  const name = curr.name;
  const linkedText = name.link(link);
  const newLine = '\n';

  return acc + linkedText + newLine;
});

const pluckGetTitle = curry(
  (attributes, platform) => attributes[platform].title
);

const byName = (a, b) => b.name < a.name;

const byPlatform = curry((platform, response) => response[platform]);

// ********************************

// getTitleFor returns a function that uses platform as an argument
const getTitleFor = (platform) =>
  pipe(toTitleCase, pluckGetTitle(attributes))(platform)(platform);

const getMemberSocialLinksFor = ([...responses], platform) =>
  pipe(
    filter(byPlatform(platform)),
    sort(byName),
    reduce(formatLinks(platform))(getTitleFor(platform))
  )(responses);

export default getMemberSocialLinksFor;
