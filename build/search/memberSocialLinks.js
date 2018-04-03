'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reduce = require('lodash/reduce');

var _reduce2 = _interopRequireDefault(_reduce);

var _helpers = require('../utils/helpers.js');

var _attributes = require('../utils/attributes.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getTitleFor = function getTitleFor(platform) {
  platform = (0, _helpers.toTitleCase)(platform);
  var getTitle = _attributes.attributes[platform].title;
  var title = getTitle(platform);
  return title;
};

var getMemberSocialLinksFor = function getMemberSocialLinksFor(responses, platform) {
  var validLinks = responses.filter(function (response) {
    return response[platform];
  }).sort(byName);
  var title = getTitleFor(platform);
  var formattedLinks = (0, _reduce2.default)(validLinks, function (acc, curr) {
    return formatLinks(acc, curr, platform);
  }, title);
  return formattedLinks;
};

var byName = function byName(a, b) {
  return a.name < b.name ? -1 : 1;
};

var formatLinks = function formatLinks(acc, curr, platform) {
  var link = curr[platform];
  var name = curr.name;
  var linkedText = name.link(link);
  var newLine = '\n';

  return acc + linkedText + newLine;
};

exports.default = getMemberSocialLinksFor;
//# sourceMappingURL=memberSocialLinks.js.map