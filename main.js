const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '.';

const fs = require('fs');
const { fileURLToPath } = require('url');

client.commands =new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
});


client.login('ODU4OTk0MTg1MzEwNTY4NDU5.YNmOrQ.PzG6Zxa-LnnOpg6tisgm67tV9kI');
