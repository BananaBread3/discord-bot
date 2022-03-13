const { MessageAttachment } = require ("discord.js");
const fs = require('fs');
const path = require('path');
module.exports = {
    name: 'tvojemama',
    description: "tvoje mama hahahahah",
    execute(message,args, cmd, client, Discord){
    
    const image1 = fs.readFileSync(path.join(__dirname,"yomomo.png"));

    const attachment = new MessageAttachment(image1);
    
    message.channel.send("Promiň, rád bych něco poslal ale tvoje máma je tak tlustá, že se mi to sem nevejde hahaa", attachment);
    }
}