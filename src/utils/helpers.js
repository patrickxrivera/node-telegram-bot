export const getIdFrom = (msg) => msg.chat.id;

export const getNameFrom = (msg) => msg.chat.first_name;

export const toTitleCase = (word) => word[0].toUpperCase() + word.slice(1);

export const getSelectedSocialPlatform = (msg) => msg.text.slice(1); // get rid of leading "/"

export const config = { parse_mode: 'HTML', disable_web_page_preview: true };

export const isRole = (regex, text) => Boolean(text.data.match(regex.roles));

export const isMember = (regex, text) =>
  Boolean(text.data.match(regex.members));

export const callbackQuery = 'callback_query';

export const getBackBtnFor = (callback_data) => [
  [{ text: '\u{1F448} Back', callback_data }]
];

export const getSelectedRole = (text) => {
  if (isCommand(text)) {
    text = formatCommand(text);
  }
  const formattedRole = formatRole(text);
  return formattedRole;
};

const isCommand = (role) => role[0] === '/';

const formatCommand = (role) => {
  role = role.slice(1);
  return toTitleCase(role);
};

const formatRole = (role) => role.slice(0, -1);
