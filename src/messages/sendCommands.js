import { getCommandsText } from '../utils/text';
import { getIdFrom, config } from '../utils/helpers';

const sendCommands = (msg, bot) => {
  const id = getIdFrom(msg);
  const text = getCommandsText();
  bot.sendMessage(id, text, config);
};

export default sendCommands;
