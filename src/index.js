import TelegramBot from 'node-telegram-bot-api';

const token = '458016821:AAHPDtnHrIDzRZwtpVqJxOPtJlkmgFnZ2P4';
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  const name = msg.chat.first_name;
  const resp = `Welcome, ${name} \u{1F604}
  \nSearch for a community member from the following options or type your search directly.`;
  const searchOptions = [['Role'], ['Interests']];

  bot.sendMessage(msg.chat.id, resp, {
    reply_markup: {
      keyboard: searchOptions
    }
  });
});

// const eventEmitter = new events.EventEmitter();
//
// eventEmitter.on('Designer', () => {
//   bot.sendMessage(msg.from.id, `You selected 'Designer!'`);
// });

bot.onText(/Role/, (msg) => {
  const resp = 'Choose which role you would like to search';
  const searchOptions = [
    [{ text: 'Designer', callback_data: 'Designer' }],
    [{ text: 'Engineer', callback_data: 'Engineer' }]
  ];

  bot.sendMessage(msg.chat.id, resp, {
    reply_markup: {
      inline_keyboard: searchOptions
    }
  });
});

// const isWord = (msg, word) => {
//   return msg.text.toString().indexOf(word) === 0;
// };
//
// const getReqFrom = (msg) => msg.text.toString();
//
// bot.on('message', (msg) => {
//   const req = getReqFrom(msg);
//   bot.sendMessage(msg.from.id, `You selected ${req}`);
// });
