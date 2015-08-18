var TelegramBot = require('node-telegram-bot-api');

var config = require('./config');
var token = config.telegram.token;
var chatId = config.telegram.chatId;
var bot = new TelegramBot(token, {polling: true});

function listen() {
  bot.on('text', function (msg) {
    var chatId = msg.chat.id;
    console.log('new message', chatId, msg);
  });
}

function sendMessage(message) {
  message = message || 'empty mesage';
  bot.sendMessage(chatId, message);
}

exports.listen = listen;
exports.send = sendMessage;

