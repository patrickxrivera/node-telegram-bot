import { getRoleDataFrom } from '../messages/sendRole.js';

const sendRoleCallback = (resp, bot) => {
  const roleData = getRoleDataFrom(resp.data);
  const { text, reply_markup } = roleData;
  const { message_id, chat } = resp.message;
  const chat_id = chat.id;
  const optns = { message_id, chat_id, reply_markup };
  bot.editMessageText(text, optns);
};

export default sendRoleCallback;
