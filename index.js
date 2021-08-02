const Discord = require('discord.js');
const client = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });

const prefix = 'r-';

const fs = require('fs');

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`); 
    // supposed to end in (client, Discord) at the end of this but causes an error, dunno why.
});

// old command / event handler
// const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
// for(const file of commandFiles) {
//     const command = require(`./commands/${file}`);

//     client.commands.set(command.name, command);
// }

// client.once('ready', () => {
//     console.log('ready');
// });

// client.on('message', message => {
//     if(!message.content.startsWith(prefix) || message.author.bot) return;

//     const args = message.content.slice(prefix.length).split(/ +/);
//     const command = args.shift().toLowerCase();

//     if(command === 'ping') {
//         client.commands.get('ping').execute(message, args);
//     }
// });

client.login ('bot token here');
