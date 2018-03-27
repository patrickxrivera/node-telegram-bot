import TelegramBot from 'node-telegram-bot-api';
const token = '458016821:AAHPDtnHrIDzRZwtpVqJxOPtJlkmgFnZ2P4';
const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
  var Hi = 'hi';
  if (
    msg.text
      .toString()
      .toLowerCase()
      .indexOf(Hi) === 0
  ) {
    bot.sendMessage(msg.chat.id, 'Hello dear user');
  }

  var bye = 'bye';
  if (
    msg.text
      .toString()
      .toLowerCase()
      .includes(bye)
  ) {
    bot.sendMessage(msg.chat.id, 'Hope to see you around again , Bye');
  }
});
