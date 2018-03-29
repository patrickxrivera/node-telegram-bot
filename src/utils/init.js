import TelegramBot from 'node-telegram-bot-api';

const token = '458016821:AAHPDtnHrIDzRZwtpVqJxOPtJlkmgFnZ2P4';

const initBot = () => new TelegramBot(token, { polling: true });

export default initBot;
