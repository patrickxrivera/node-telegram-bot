'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _byRole = require('../byRole');

var _surveyResponses = require('../../data/surveyResponses');

var _surveyResponses2 = _interopRequireDefault(_surveyResponses);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var expect = _chai2.default.expect;

describe('By Role', function () {
  it('should return a sorted list of names', function () {
    var responses = _surveyResponses2.default.slice();
    var targetRole = 'Investor';
    var memberNames = (0, _byRole.filterMembers)(responses, targetRole);
    var expected = ['Arielle Zuckerberg', 'Casey Caruso', 'Chantalle Dumonceaux', 'Ina Herlihy', 'Jennifer Kaehms', 'Laura Thompson', 'Randa Sakallah', 'Seth Rosenberg', 'Terri Burns'];

    expect(memberNames).to.eql(expected);
  });
});
//# sourceMappingURL=byRole.test.js.map