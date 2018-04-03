import reduce from 'lodash/reduce';

import { toTitleCase } from '../utils/helpers.js';
import { attributes } from '../utils/attributes.js';

const getTitleFor = (platform) => {
  platform = toTitleCase(platform);
  const getTitle = attributes[platform].title;
  const title = getTitle(platform);
  return title;
};

const getMemberSocialLinksFor = (responses, platform) => {
  const validLinks = responses
    .filter((response) => response[platform])
    .sort(byName);
  const title = getTitleFor(platform);
  const formattedLinks = reduce(
    validLinks,
    (acc, curr) => formatLinks(acc, curr, platform),
    title
  );
  return formattedLinks;
};

const byName = (a, b) => (a.name < b.name ? -1 : 1);

const formatLinks = (acc, curr, platform) => {
  const link = curr[platform];
  const name = curr.name;
  const linkedText = name.link(link);
  const newLine = '\n';

  return acc + linkedText + newLine;
};

export default getMemberSocialLinksFor;
