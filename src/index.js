import initEnv from './init/env.js';
import initBot from './init/bot.js';
import initActions from './init/actions.js';

initEnv();
const bot = initBot();
initActions(bot);
