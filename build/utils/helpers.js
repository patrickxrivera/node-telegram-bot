'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getIdFrom = exports.getIdFrom = function getIdFrom(msg) {
  return msg.chat.id;
};

var getNameFrom = exports.getNameFrom = function getNameFrom(msg) {
  return msg.chat.first_name;
};

var toTitleCase = exports.toTitleCase = function toTitleCase(word) {
  return word[0].toUpperCase() + word.slice(1);
};

var getSelectedSocialPlatform = exports.getSelectedSocialPlatform = function getSelectedSocialPlatform(msg) {
  return msg.text.slice(1);
}; // get rid of leading "/"

var config = exports.config = { parse_mode: 'HTML', disable_web_page_preview: true };

var isRole = exports.isRole = function isRole(regex, text) {
  return Boolean(text.data.match(regex.roles));
};

var isMember = exports.isMember = function isMember(regex, text) {
  return Boolean(text.data.match(regex.members));
};

var callbackQuery = exports.callbackQuery = 'callback_query';

var getBackBtnFor = exports.getBackBtnFor = function getBackBtnFor(callback_data) {
  return [[{ text: '\uD83D\uDC48 Back', callback_data: callback_data }]];
};

var getSelectedRole = exports.getSelectedRole = function getSelectedRole(text) {
  // TODO make this less shitty
  switch (true) {
    case isCommand(text):
      text = formatCommand(text); // let it pass through
    default:
      var formattedRole = formatRole(text);
      return formattedRole;
  }
};

var isProductManager = function isProductManager(text) {
  return text === '/product_manager';
};

var isCommand = function isCommand(role) {
  return role[0] === '/';
};

var formatCommand = function formatCommand(command) {
  command = command.slice(1); // get rid of leading "/"
  var formattedCommand = command.split('_').map(getTitleCase).join(' ');
  return formattedCommand;
};

var getTitleCase = function getTitleCase(command) {
  return toTitleCase(command);
};

var formatRole = function formatRole(role) {
  return role.slice(0, -1);
};
//# sourceMappingURL=helpers.js.map