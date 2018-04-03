import chai from 'chai';

import { getCommandsText } from '../../utils/text';

const expect = chai.expect;

describe('Send Commands', () => {
  it('should render a list of all commands', () => {
    const result = `All commands \u{1F481} \n\n/start - I'll guide you through searching for community members\n/commands - see all commands\n/roles - search for community members by role\n/instagram, /twitter, /facebook, /linkedin - receive a direct link to all community member accounts on that platform\n/engineers, /investors, /founders, /marketers, /designers, /product_managers - see all community members that have that role`;
    const expected = getCommandsText();
    expect(result).to.equal(expected);
  });
});
