import express from 'express';
import bodyParser from 'body-parser';
import packageInfo from './package.json';

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json({ version: packageInfo.version });
});

const server = app.listen(process.env.PORT, '0.0.0.0', () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Web server started at http://%s:%s', host, port);
});

const initServer = (bot) => {
  app.post('/' + bot.token, (req, res) => {
    bot.processUpdate(req.body);
    res.sendStatus(200);
  });
};

export default initServer;
