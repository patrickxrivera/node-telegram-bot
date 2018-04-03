"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getStartText = exports.getStartText = function getStartText(name) {
  return "Welcome, " + name + " \uD83D\uDE04\n\nSearch for a community member from the following options or type your search directly.";
};

var getRoleText = exports.getRoleText = function getRoleText(role) {
  return "Nice! \uD83D\uDE4C " + role + "s are pretty awesome. \n\nNow select a person to search";
};

var getCommandsText = exports.getCommandsText = function getCommandsText() {
  return "All commands \uD83D\uDC81 \n\n/start - I'll guide you through searching for community members\n/commands - see all commands\n/roles - search for community members by role\n/instagram, /twitter, /facebook, /linkedin - receive a direct link to all community member accounts on that platform\n/engineers, /investors, /founders, /marketers, /designers, /product_managers - see all community members that have that role";
};
//# sourceMappingURL=text.js.map