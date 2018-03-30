require('dotenv').config();
import serverSetup from './init/server.js';
import { initBot, initActions } from './init/';

const bot = initBot();
// serverSetup(bot);
initActions(bot);
