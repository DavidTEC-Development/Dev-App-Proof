// Bot developed by DavidTEC.
const Discord = require("discord.js");
const config = require('./config.json');
const logChannel = "server-bot-console";

/* 
Development Commands:

 if (msg.content === prefix + 'sendmessage') {
    if (msg.author.bot) return;
    msg.channel.send('Developers!');
    console.log(datetime+msg.author.tag +' ran command: ' + prefix + 'sendmessage');
  }

  if (msg.content == prefix + 'reply') {
    if (msg.author.bot) return;
    msg.reply('Reply.');
    console.log(datetime+msg.author.tag +' ran command: ' + prefix + 'reply');
  }
*/
const client = new Discord.Client();
var currentdate = new Date(); 
var datetime = "[" + currentdate.getDate() + "/"
  + (currentdate.getMonth()+1)  + "/" 
  + currentdate.getFullYear() + " @ "  
  + currentdate.getHours() + ":"  
  + currentdate.getMinutes() + ":" 
  + currentdate.getSeconds() + "] ";
//var channel = client.servers.get("general", "People of Life").defaultChannel;

var inChannel = "test";

var TimeIntervalValue;
var TimeInterval = config.TimeInterval;

if (TimeInterval == "h") {
  TimeIntervalValue = 10000;
} else if (TimeInterval == "m") {
  TimeIntervalValue = 1000;
} else if (TimeInterval == "s") {
  TimeIntervalValue = 100;
}

var time = config.Time*TimeIntervalValue;
const discordBotName = config.discordBotName;
const endl = config.endl;
const prefix = config.prefix;

const helpParameters = 
  'Main: '+endl+
  '  - '+prefix+'help - Shows help '+endl+
  '  - '+prefix+'credits - Shows the credits (Creator\'s youtube channel)'+endl+
  '  - '+prefix+'channel - Shows DerpyDude\'s youtube channel.'+endl+
  '  - '+prefix+'news - Shows the update log/bot news';

const news = 
  'News:'+endl+
  ' - Realease 1.0 released!'+endl+
  ' - All Development commands ('+prefix+'sendmessage, '+prefix+'reply) removed.'
  ' - '+prefix+'news command added '+endl+
  ' = '+prefix+'co command renamed to '+prefix+'help'+endl+
  ' - '+prefix+'co command fixed '+endl+
  ' - Bot backend console: '+endl+
  '  - Command Line time added [Time] '+endl+
  ' - Switched from 1 JavaScript file and added JSON';

const game = 'Type '+prefix+'help for help';

client.on('ready', () => {
  console.log(datetime+`Logged in as ${client.user.tag}! (${client.user.username})`);
  client.user.setGame(game);
});

client.on('message', msg => {
  if (msg.content == prefix + 'news') {
    if (msg.author.bot) return;
    msg.author.send(news);
    console.log(datetime+msg.author.tag +' ran command: ' + prefix + 'news');
  }

  if (msg.content == prefix + 'help') {
    if (msg.author.bot) return;
    msg.author.send('Help:\n'+helpParameters);
    console.log(datetime+msg.author.tag +' ran command: ' + prefix + 'help');
  }
  
  if (msg.content == prefix + 'credits') {
    if (msg.author.bot) return;
    msg.author.send('Discord bot '+discordBotName+' made By DavidTEC.\n - Youtube: <https://youtube.com/c/DavidTECDavidGames999Games> \n - Twitter: <https://twitter.com/DavidGames999>');
    console.log(datetime+msg.author.tag +' ran command: ' + prefix + 'credits');
  }
  
  if (msg.content == prefix + 'channel') {
    if (msg.author.bot) return;
    msg.author.send('DerpyDude\'s Youtube Channel: <https://www.youtube.com/channel/UCw1V7o-HjRuRDa3k40InqYQ>\n - For creator\s channel do '+prefix+'credits');
    console.log(datetime+msg.author.tag +' ran command: ' + prefix + 'channel');
    getChannelId.sendMessage('a');
    //client.sendMessage(logChannel,"[" + datetime + "] " + msg.author.tag + ": Ran command " + prefix + "channel");
  }

  if (msg.channel.isPrivate) {
    console.log(`(Private) ${msg.author.name}: ${msg.content}`);
  } else {
    console.log(`(${msg.channel.namee}) ${msg.author.name}: ${msg.content}`);
  } 
});
client.login(config.token);