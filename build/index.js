'use strict';

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _env = require('./init/env.js');

var _env2 = _interopRequireDefault(_env);

var _bot = require('./init/bot.js');

var _bot2 = _interopRequireDefault(_bot);

var _server = require('./init/server.js');

var _server2 = _interopRequireDefault(_server);

var _actions = require('./init/actions.js');

var _actions2 = _interopRequireDefault(_actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _env2.default)();

var bot = (0, _bot2.default)();

(0, _server2.default)(bot);
(0, _actions2.default)(bot);

// Keep Heroku server from idling

var appUrl = 'https://glacial-fortress-97853.herokuapp.com/';
var fiveMinutes = 300000;

setInterval(function () {
  _http2.default.get(appUrl);
}, fiveMinutes);
//# sourceMappingURL=index.js.map