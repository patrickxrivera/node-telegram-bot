'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _ramda = require('ramda');

var _attributes = require('../utils/attributes.js');

var _attributes2 = _interopRequireDefault(_attributes);

var _links = require('../data/links.js');

var _links2 = _interopRequireDefault(_links);

var _helpers = require('../utils/helpers.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

var pluckFormat = function pluckFormat(key) {
  return _attributes2.default[key].format;
};

var getFormattedCard = function getFormattedCard(key, data) {
  return pluckFormat(key)(data);
};

var getAttribute = function getAttribute(acc, _ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      key = _ref2[0],
      val = _ref2[1];

  key = (0, _helpers.toTitleCase)(key);

  var data = { key: key, val: val };
  var formattedCard = getFormattedCard(key, data);

  return acc + formattedCard;
};

var getTargetMember = (0, _ramda.curry)(function (name, response) {
  return response.name.trim() === name;
});

var getMemberCardFrom = function getMemberCardFrom(name, _ref3) {
  var _ref4 = _toArray(_ref3),
      responses = _ref4.slice(0);

  return (0, _ramda.pipe)((0, _ramda.filter)(getTargetMember(name)), _ramda.head, _ramda.toPairs, (0, _ramda.reduce)(getAttribute)(''))(responses);
};

exports.default = getMemberCardFrom;
//# sourceMappingURL=memberCard.js.map