import initEnv from './init/env.js';
import initBot from './init/bot.js';
import initServer from './init/server.js';
import initActions from './init/actions.js';

initEnv();

const bot = initBot();

initServer(bot);
initActions(bot);
