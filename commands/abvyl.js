const { MessageAttachment } = require ("discord.js");
const fs = require('fs');
const path = require('path');
module.exports = {
    name: 'abvyl',
    description: "moje divna fotka",
    execute(message,args, cmd, client, Discord){
    
    const image1 = fs.readFileSync(path.join(__dirname,"abvyl.jpg"));

    const attachment = new MessageAttachment(image1);
    
    message.channel.send("rapove videoklipy z devadesatek be like", attachment);
    }
}