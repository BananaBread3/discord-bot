const { MessageAttachment } = require ("discord.js");
const fs = require('fs');
const path = require('path');
module.exports = {
    name: 'stojí?',
    description: "já ne",
    execute(message,args, cmd, client, Discord){
   
    message.channel.send("já ne");

    }
}