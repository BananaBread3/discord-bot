module.exports = {
    name: 'help',
    description: "help command",
    execute(message,args, cmd, client, Discord){
        message.channel.send('.kick - Kicks a member'+"\n"+ ".ban - Bans a member"+"\n"+".kocik - sends a picture of a cat");
        message.channel.send('.kockoholka - sends a picture of a catgirl'+"\n"+ ".play[URL] - plays a song"+"\n"+".leave - leaves channel");
        message.channel.send('.ping - sends a pong'+"\n"+ ".clear[number] - clear messages"+"\n"+".pong- sends ping");
        message.channel.send('.spam[message] - spam message'+"\n"+'.abvyl - fotka našeho milovaného abvyla'+"\n"+'.nos - nos nějakýho chleba nebo matíka či co');
        message.channel.send('.stojí? - stojí? já ne');
    }
}