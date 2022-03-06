const { MessageAttachment } = require ("discord.js");
const fs = require('fs');
const path = require('path');
module.exports = {
    name: 'nos',
    description: "moje divna fotka",
    execute(message,args, cmd, client, Discord){
    
    const image1 = fs.readFileSync(path.join(__dirname,"nos.jpg"));

    const attachment = new MessageAttachment(image1);
    
    message.channel.send("pikonio", attachment);
    }
}