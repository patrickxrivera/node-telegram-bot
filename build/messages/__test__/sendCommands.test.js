'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _text = require('../../utils/text');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var expect = _chai2.default.expect;

describe('Send Commands', function () {
  it('should render a list of all commands', function () {
    var result = 'All commands \uD83D\uDC81 \n\n/start - I\'ll guide you through searching for community members\n/commands - see all commands\n/roles - search for community members by role\n/instagram, /twitter, /facebook, /linkedin - receive a direct link to all community member accounts on that platform\n/engineers, /investors, /founders, /marketers, /designers, /product_managers - see all community members that have that role';
    var expected = (0, _text.getCommandsText)();
    expect(result).to.equal(expected);
  });
});
//# sourceMappingURL=sendCommands.test.js.map