import { getRoleDataFrom } from '../messages/sendRole.js';
import { config } from '../utils/helpers.js';

const sendRoleCallback = (resp, bot) => {
  const roleData = getRoleDataFrom(resp.data);
  const { text, reply_markup } = roleData;
  const { message_id, chat } = resp.message;
  const optns = { ...config, message_id, reply_markup, chat_id: chat.id };
  console.log(optns);
  bot.editMessageText(text, optns);
};

export default sendRoleCallback;
