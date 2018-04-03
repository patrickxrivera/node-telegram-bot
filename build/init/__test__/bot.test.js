'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _bot = require('../bot');

var _bot2 = _interopRequireDefault(_bot);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var expect = _chai2.default.expect;

describe('Init Bot', function () {
  it('should set dev token in dev environment', function () {
    var env = 'dev';
    isProdEnv(env) ? _bot.Prod.init() : _bot.Dev.init();
    var token = _bot.Token.token;
    expect(token).to.equal('455812399:AAFbD3YTZdIX23CVTxu3357AalBmVV1DQwU');
  });
});

var isProdEnv = function isProdEnv(env) {
  return env === 'production';
};
//# sourceMappingURL=bot.test.js.map