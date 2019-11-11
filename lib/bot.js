const TelegramBot = require('node-telegram-bot-api');

let bot;

const send = async (chatId, data) => {
  try {
    const { project, trigger, error } = data;
    const message = `
    For project ${project.name} receive crash report.\n${trigger.type}:${trigger.message}.\nURL: ${error.url}`;
    bot.sendMessage(chatId, message);
  } catch (error) {
    console.log(error);
  }
};

const init = (options) => {
  const { token } = options;
  bot = new TelegramBot(token, { polling: false });
};

module.exports = {
  send,
  init,
};
