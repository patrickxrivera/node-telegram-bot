import sendRoleCallback from '../messages/sendRoleCallback.js';
import sendMemberCardCallback from '../messages/sendMemberCardCallback.js';
import regex from '../data/regex.js';
import { isRole, isMember } from './helpers.js';

const handleCallback = (resp, bot) => {
  if (isRole(regex, resp)) {
    sendRoleCallback(resp, bot);
  }
  if (isMember(regex, resp)) {
    sendMemberCardCallback(resp, bot);
  }
};

export default handleCallback;
