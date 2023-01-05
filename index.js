const TelegramBot = require('node-telegram-bot-api');

const token = '5971154844:AAFAgs0eHEdkLNHDqbIlNfmQWEKwWkkpUnk';
const bot = new TelegramBot(token, {polling: true});
const webAppUrl = '/'

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    if(text === '/start') {
        await bot.sendMessage(chatId,"Добро пожаловать, Ваш кошелек создан, он привязан к вашему профилю Telegram Адрес вашего кошелька :0xc6D3720f6286C5173C94523b8b02d549c9933662",
            {
                reply_markup:{
                    inline_keyboard:[
                        [{
                            text:'кошелек',
                            web_app:{url:webAppUrl}
                        }]
                    ]
                }
            }
        )
    }


});