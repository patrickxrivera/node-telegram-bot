'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _sendRoleCallback = require('../messages/sendRoleCallback.js');

var _sendRoleCallback2 = _interopRequireDefault(_sendRoleCallback);

var _sendMemberCardCallback = require('../messages/sendMemberCardCallback.js');

var _sendMemberCardCallback2 = _interopRequireDefault(_sendMemberCardCallback);

var _sendStart = require('../messages/sendStart.js');

var _sendStart2 = _interopRequireDefault(_sendStart);

var _regex = require('../data/regex.js');

var _regex2 = _interopRequireDefault(_regex);

var _helpers = require('./helpers.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var lastRole = null; // keep track of where backBtn should point to

var handleCallback = function handleCallback(resp, bot) {
  switch (true) {
    case (0, _helpers.isRole)(_regex2.default, resp):
      updateBackBtnPointer(resp);
      (0, _sendRoleCallback2.default)(resp, bot);
      break;
    case (0, _helpers.isMember)(_regex2.default, resp):
      (0, _sendMemberCardCallback2.default)(resp, bot);
      break;
    default:
      handleBackClick(resp, bot);
  }
};

var handleBackClick = function handleBackClick(resp, bot) {
  switch (resp.data) {
    case 'start':
      (0, _sendStart2.default)(resp.message, bot);
      break;
    default:
      resp.data = lastRole;
      (0, _sendRoleCallback2.default)(resp, bot);
  }
};

var updateBackBtnPointer = function updateBackBtnPointer(_ref) {
  var data = _ref.data;

  lastRole = data;
};

exports.default = handleCallback;
//# sourceMappingURL=handleCallback.js.map