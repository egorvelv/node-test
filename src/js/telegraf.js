const { Telegraf } = require('telegraf');

const bot = new Telegraf('1750148360:AAFmndbEXLK2aTQbSHuE1tN9w_vKoKNFRkY');

bot.start((ctx) => ctx.reply('Привет, мешок с костями'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()

module.exports = bot;