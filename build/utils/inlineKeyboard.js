"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var assignInlineFormatTo = function assignInlineFormatTo(arr) {
  var data = arr.map(assignOptns);
  var threeRowArray = createThreeRowArrayFor(data);
  return threeRowArray;
};

var assignOptns = function assignOptns(item) {
  var optns = {
    text: item,
    callback_data: item
  };
  return optns;
};

var createThreeRowArrayFor = function createThreeRowArrayFor(members) {
  var formattedArray = [];

  while (members.length) {
    var membersPerRow = 1;
    var row = members.splice(0, membersPerRow);
    formattedArray = [].concat(_toConsumableArray(formattedArray), [row]);
  }

  return formattedArray;
};

exports.default = assignInlineFormatTo;
//# sourceMappingURL=inlineKeyboard.js.map