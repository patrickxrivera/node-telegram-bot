const getNameAttribute = ({ val }) => `<strong>${val}</strong>\n\n`;

const getLinkAttribute = ({ key, val }, emoji) => {
  const linkedText = key.link(val);
  return `${emoji} ${linkedText}\n`;
};

const getNonLinkAttribute = ({ key, val }, emoji) =>
  `${emoji} ${key}: ${val}\n\n`;

const getContactAttribute = ({ val }, emoji) => `${emoji} ${val}\n`;

export const attributes = {
  Timestamp: {
    format: () => ''
  },
  Rolecategory: {
    format: () => ''
  },
  Name: {
    format: (data) => getNameAttribute(data)
  },
  Role: {
    emoji: '\u{1F4A5}',
    format: (data) => getNonLinkAttribute(data, attributes.Role.emoji)
  },
  Specialties: {
    emoji: '\u{1F511}',
    format: (data) => getNonLinkAttribute(data, attributes.Specialties.emoji)
  },
  Learning: {
    emoji: '\u{1F4D6}',
    format: (data) => getNonLinkAttribute(data, attributes.Learning.emoji)
  },
  Linkedin: {
    emoji: '\u{23F0}',
    format: (data) => getLinkAttribute(data, attributes.Linkedin.emoji)
  },
  Facebook: {
    emoji: '\u{1F441}',
    format: (data) => getLinkAttribute(data, attributes.Facebook.emoji)
  },
  Instagram: {
    emoji: '\u{1F4F8}',
    format: (data) => getLinkAttribute(data, attributes.Instagram.emoji)
  },
  Twitter: {
    emoji: '\u{1F425}',
    format: (data) => getLinkAttribute(data, attributes.Twitter.emoji)
  },
  Email: {
    emoji: '\u{1F4E9}',
    format: (data) => getContactAttribute(data, attributes.Email.emoji)
  },
  Cell: {
    emoji: '\u{1F4DE}',
    format: (data) => getContactAttribute(data, attributes.Cell.emoji)
  }
};

export default attributes;
