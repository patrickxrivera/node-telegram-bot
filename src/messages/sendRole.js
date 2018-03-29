import surveyResponses from '../data/surveyResponses.js';
import { getPeopleByRole } from '../search/byRole.js';
import { getIdFrom, getSelectedRole } from '../utils/helpers.js';

const sendRole = (msg, bot) => {
  const id = getIdFrom(msg);
  const role = getSelectedRole(msg.text);
  const peopleByRole = getPeopleByRole(surveyResponses, role);
  const text = `Nice! \u{1F64C} ${role}s are pretty awesome. \n\nNow select a person to search`;
  const optns = {
    reply_markup: {
      keyboard: peopleByRole
    }
  };

  bot.sendMessage(id, text, optns);
};

export default sendRole;
