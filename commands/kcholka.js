const { MessageAttachment } = require ("discord.js");
const fs = require('fs');
const path = require('path');
module.exports = {
    name: 'kockoholka',
    description: "uwu",
    execute(message,args, cmd, client, Discord){
const image1 = fs.readFileSync(path.join(__dirname,"catgirl1.png"));

const image2 = fs.readFileSync(path.join(__dirname,"catgirl2.png"));

const image3 = fs.readFileSync(path.join(__dirname,"catgirl3.png"));

const image4 = fs.readFileSync(path.join(__dirname,"catgirl4.png"));

const image5 = fs.readFileSync(path.join(__dirname,"catgirl5.png"));

const image6 = fs.readFileSync(path.join(__dirname,"catgirl6.png"));

const image7 = fs.readFileSync(path.join(__dirname,"catgirl7.png"));

const image8 = fs.readFileSync(path.join(__dirname,"catgirl8.png"));

const image9 = fs.readFileSync(path.join(__dirname,"catgirl9.png"));

const image10 = fs.readFileSync(path.join(__dirname,"ctgirl10.png"));

const attachment = new MessageAttachment(image1);
const attachment2 = new MessageAttachment(image2);
const attachment3 = new MessageAttachment(image3);
const attachment4 = new MessageAttachment(image4);
const attachment5 = new MessageAttachment(image5);
const attachment6 = new MessageAttachment(image6);
const attachment7 = new MessageAttachment(image7);
const attachment8 = new MessageAttachment(image8);
const attachment9 = new MessageAttachment(image9);
const attachment10 = new MessageAttachment(image10);

var x = Math.floor(Math.random() * 10);
switch(x){
  case 1: message.channel.send("uwu", attachment);break;

  case 2: message.channel.send("uwu", attachment2);break;

  case 3: message.channel.send("uwu", attachment3);break;

  case 4: message.channel.send("uwu", attachment4);break;

  case 5: message.channel.send("uwu", attachment5);break;

  case 6: message.channel.send("uwu", attachment6);break;

  case 7: message.channel.send("uwu", attachment7);break;

  case 8: message.channel.send("uwu", attachment8);break;

  case 9: message.channel.send("uwu", attachment9);break;

  default: message.channel.send("uwu", attachment10);break;
    }
}
}