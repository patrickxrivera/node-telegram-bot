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
  // TODO make this less shitty
  switch (true) {
    case isCommand(text):
      text = formatCommand(text); // let it pass through
    default:
      const formattedRole = formatRole(text);
      return formattedRole;
  }
};

const isProductManager = (text) => text === '/product_manager';

const isCommand = (role) => role[0] === '/';

const formatCommand = (command) => {
  command = command.slice(1); // get rid of leading "/"
  const formattedCommand = command
    .split('_')
    .map(getTitleCase)
    .join(' ');
  return formattedCommand;
};

const getTitleCase = (command) => toTitleCase(command);

const formatRole = (role) => role.slice(0, -1);
