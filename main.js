const BotMaf = require ("./bot.js")

const bot = new BotMaf();

bot.memorize(0)
bot.memorize(1)
bot.memorize(0)
bot.memorize(1)
bot.memorize(1)
bot.memorize(0)
bot.memorize(1)
bot.memorize(1)
bot.memorize(1)
bot.memorize(0)

console.log(bot.play())