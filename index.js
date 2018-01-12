const TelegramBot = require('node-telegram-bot-api');

const token = "514957709:AAGj-S9O2YVRZ6qS9luoWhpTv_GcJpe3pvc"

const bot = new TelegramBot(token, {polling: true});


bot.on('message', (msg) => {
    
    var Hi = "hi";
    if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
    bot.sendMessage(msg.chat.id,"Hello dear user");
    } 
        
    });
