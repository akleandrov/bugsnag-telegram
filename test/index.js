const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
require('dotenv').config();
const bugsnagTelegram = require('../lib');

const app = new Koa();
const router = new Router();

const bgtg = bugsnagTelegram({ token: process.env.TOKEN, chatId: process.env.CHAT_ID });
router.post('/hooks/bugsnag', bgtg);
app.use(bodyParser());
app.use(router.routes());
app.listen(3010);
