import http from 'http';

import initEnv from './init/env.js';
import initBot from './init/bot.js';
import initServer from './init/server.js';
import initActions from './init/actions.js';

initEnv();

const bot = initBot();

initServer(bot);
initActions(bot);

// Keep Heroku server from idling

const appUrl = 'https://glacial-fortress-97853.herokuapp.com/';
const fiveMinutes = 300000;

setInterval(() => {
  http.get(appUrl);
}, fiveMinutes);
