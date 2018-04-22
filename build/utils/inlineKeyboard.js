'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ramda = require('ramda');

var assignOptns = function assignOptns(item) {
  var optns = [{
    text: item,
    callback_data: item
  }];
  return optns;
};

var getRows = (0, _ramda.map)(assignOptns);

var formatInline = function formatInline(arr) {
  var rows = getRows(arr);
  return rows;
};

exports.default = formatInline;
//# sourceMappingURL=inlineKeyboard.js.map