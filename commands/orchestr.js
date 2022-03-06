const { MessageAttachment } = require ("discord.js");
const fs = require('fs');
const path = require('path');
module.exports = {
    name: 'orchestr',
    description: "orchestr",
    execute(message,args, cmd, client, Discord){
    
    const image1 = fs.readFileSync(path.join(__dirname,"orchestrLmao.png"));

    const attachment = new MessageAttachment(image1);
    
    message.channel.send("orchestr", attachment);
    }
}