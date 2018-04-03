import chai from 'chai';

import { filterMembers } from '../byRole';
import surveyResponses from '../../data/surveyResponses';

const expect = chai.expect;

describe('By Role', () => {
  it('should return a sorted list of names', () => {
    const responses = surveyResponses.slice();
    const targetRole = 'Investor';
    const memberNames = filterMembers(responses, targetRole);
    const expected = [
      'Arielle Zuckerberg',
      'Casey Caruso',
      'Chantalle Dumonceaux',
      'Ina Herlihy',
      'Jennifer Kaehms',
      'Laura Thompson',
      'Randa Sakallah',
      'Seth Rosenberg',
      'Terri Burns'
    ];

    expect(memberNames).to.eql(expected);
  });
});
