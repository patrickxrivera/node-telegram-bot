import sendRoleCallback from '../messages/sendRoleCallback.js';
import sendMemberCardCallback from '../messages/sendMemberCardCallback.js';
import sendStart from '../messages/sendStart.js';
import regex from '../data/regex.js';
import { isRole, isMember } from './helpers.js';

const handleBackClick = (resp, bot) => {
  switch (resp.data) {
    case 'start':
      sendStart(resp.message, bot);
      break;
    default:
      console.log('REACHED DEFAULT');
  }
};

const handleCallback = (resp, bot) => {
  switch (true) {
    case isRole(regex, resp):
      sendRoleCallback(resp, bot);
      break;
    case isMember(regex, resp):
      sendMemberCardCallback(resp, bot);
      break;
    default:
      handleBackClick(resp, bot);
  }
};

export default handleCallback;
