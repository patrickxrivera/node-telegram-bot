import chai from 'chai';

import initBot, { Prod, Dev, Token } from '../bot';

const expect = chai.expect;

describe('Init Bot', () => {
  it('should set dev token in dev environment', () => {
    const env = 'dev';
    console.log('TEST 1');
    isProdEnv(env) ? Prod.init() : Dev.init();
    console.log('TEST 2');
    const token = Token.token;
    expect(token).to.equal('455812399:AAFbD3YTZdIX23CVTxu3357AalBmVV1DQwU');
  });
});

const isProdEnv = (env) => env === 'production';
