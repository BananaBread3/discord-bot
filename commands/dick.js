const { MessageAttachment } = require ("discord.js");
const fs = require('fs');
const path = require('path');
module.exports = {
    name: 'dick',
    description: "sis myslel",
    execute(message,args, cmd, client, Discord){
    
    const image1 = fs.readFileSync(path.join(__dirname,"dio.jpg"));

    const attachment = new MessageAttachment(image1);
    
    message.channel.send(attachment);
    }
}