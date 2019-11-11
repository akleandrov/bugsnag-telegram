const bot = require('./bot');

const createHook = (options) => {
  const { chatId } = options;
  bot.init(options);
  return async (ctx, next) => {
    await bot.send(chatId, ctx.request.body);
    ctx.status = 200;
    await next();
  };
};

module.exports = createHook;
