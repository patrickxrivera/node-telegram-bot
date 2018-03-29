export const toTitleCase = (word) => word[0].toUpperCase() + word.slice(1);

export const getSelectedSocialPlatform = (msg) => msg.text.slice(1); // get rid of leading "/"

export const config = { parse_mode: 'HTML', disable_web_page_preview: true };

export const getSelectedRole = (selection) => {
  console.log('working');
  if (isCommand(selection)) selection = formatCommand(selection);
  const formattedRole = formatRole(selection);
  return formattedRole;
};

const isCommand = (role) => role[0] === '/';

const formatCommand = (role) => {
  role = role.slice(1);
  return toTitleCase(role);
};

const formatRole = (role) => role.slice(0, -1);
