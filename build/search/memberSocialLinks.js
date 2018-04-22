'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ramda = require('ramda');

var _helpers = require('../utils/helpers.js');

var _attributes = require('../utils/attributes.js');

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

// ********************************

var formatLinks = (0, _ramda.curry)(function (platform, acc, curr) {
  var link = curr[platform];
  var name = curr.name;
  var linkedText = name.link(link);
  var newLine = '\n';

  return acc + linkedText + newLine;
});

var pluckGetTitle = (0, _ramda.curry)(function (attributes, platform) {
  return attributes[platform].title;
});

var byName = function byName(a, b) {
  return b.name < a.name;
};

var byPlatform = (0, _ramda.curry)(function (platform, response) {
  return response[platform];
});

// ********************************

// getTitleFor returns a function that uses platform as an argument
var getTitleFor = function getTitleFor(platform) {
  return (0, _ramda.pipe)(_helpers.toTitleCase, pluckGetTitle(_attributes.attributes))(platform)(platform);
};

var getMemberSocialLinksFor = function getMemberSocialLinksFor(_ref, platform) {
  var _ref2 = _toArray(_ref),
      responses = _ref2.slice(0);

  return (0, _ramda.pipe)((0, _ramda.filter)(byPlatform(platform)), (0, _ramda.sort)(byName), (0, _ramda.reduce)(formatLinks(platform))(getTitleFor(platform)))(responses);
};

exports.default = getMemberSocialLinksFor;
//# sourceMappingURL=memberSocialLinks.js.map