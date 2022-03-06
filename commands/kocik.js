const { MessageAttachment } = require ("discord.js");
const fs = require('fs');
const path = require('path');

module.exports = {
    name: 'kocik',
    description: "lemme bless ur day w/ kocik",
    execute(message,args, cmd, client, Discord){
  
const image1 = fs.readFileSync(path.join(__dirname,"cic2.jpg"));

const image2 = fs.readFileSync(path.join(__dirname,"cic3.png"));

const image3 = fs.readFileSync(path.join(__dirname,"cici4.jpg"));

const image4 = fs.readFileSync(path.join(__dirname,"cici10.png"));

const image5 = fs.readFileSync(path.join(__dirname,"cici5.png"));

const image6 = fs.readFileSync(path.join(__dirname,"cici6.png"));

const image7 = fs.readFileSync(path.join(__dirname,"cici7.png"));

const image8 = fs.readFileSync(path.join(__dirname,"cici8.png"));

const image9 = fs.readFileSync(path.join(__dirname,"cici9.png"));

const attachment = new MessageAttachment(image1);
const attachment2 = new MessageAttachment(image2);
const attachment3 = new MessageAttachment(image3);
const attachment4 = new MessageAttachment(image4);
const attachment5 = new MessageAttachment(image5);
const attachment6 = new MessageAttachment(image6);
const attachment7 = new MessageAttachment(image7);
const attachment8 = new MessageAttachment(image8);
const attachment9 = new MessageAttachment(image9);
var x = Math.floor(Math.random() * 9);
switch(x){
  case 1: message.channel.send("<3", attachment);break;

  case 2: message.channel.send("<3", attachment2);break;

  case 3: message.channel.send("<3", attachment3);break;

  case 4: message.channel.send("<3", attachment4);break;

  case 5: message.channel.send("<3", attachment5);break;

  case 6: message.channel.send("<3", attachment6);break;

  case 7: message.channel.send("<3", attachment7);break;

  case 8: message.channel.send("<3", attachment8);break;
  
  default: message.channel.send("<3", attachment9);break;

}
 

}
}