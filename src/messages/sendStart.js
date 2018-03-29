import { getIdFrom, getNameFrom } from '../utils/helpers.js';
import { getStartText } from '../utils/text.js';

const sendStart = (msg, bot) => {
  const id = getIdFrom(msg);
  const name = getNameFrom(msg);
  const text = getStartText(name);

  bot.sendMessage(id, text, {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Engineers',
            callback_data: 'Engineers'
          },
          {
            text: 'Investors',
            callback_data: 'Investors'
          }
        ]
      ]
    }
  });
};

export default sendStart;
