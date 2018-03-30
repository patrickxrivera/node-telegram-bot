import { getRoleDataFrom } from '../messages/sendRole.js';

const sendRoleCallback = (resp, bot) => {
  const roleData = getRoleDataFrom(resp.data);
  const { text, reply_markup } = roleData;
  const { message_id, chat } = resp.message;
  const optns = { message_id, reply_markup, chat_id: chat.id };
  bot.editMessageText(text, optns);
};

export default sendRoleCallback;
