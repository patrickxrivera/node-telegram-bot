'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reduce = require('lodash/reduce');

var _reduce2 = _interopRequireDefault(_reduce);

var _attributes = require('../utils/attributes.js');

var _attributes2 = _interopRequireDefault(_attributes);

var _links = require('../data/links.js');

var _links2 = _interopRequireDefault(_links);

var _helpers = require('../utils/helpers.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getMemberCardFrom = function getMemberCardFrom(responses, name) {
  var targetMember = getTargetMember(responses, name);
  var card = concatAttributesFor(targetMember);
  return card;
};

var getTargetMember = function getTargetMember(responses, name) {
  return responses.filter(function (response) {
    return response.name.trim() === name;
  })[0];
};

var concatAttributesFor = function concatAttributesFor(person) {
  var card = (0, _reduce2.default)(person, function (result, val, key) {
    return result + getAttribute(key, val);
  }, '');
  return card;
};

var getAttribute = function getAttribute(key, val) {
  key = (0, _helpers.toTitleCase)(key);

  var data = { key: key, val: val };
  var format = _attributes2.default[key].format;
  var formattedCard = format(data);

  return formattedCard;
};

exports.default = getMemberCardFrom;
//# sourceMappingURL=memberCard.js.map