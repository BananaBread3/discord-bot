module.exports = {
    name: 'spam',
    description: "spam lol",
    execute(message,args, cmd, client, Discord){
      
      const target = message.content;

  
       for (let i = 0; i < 15; i++) {
       message.channel.send(target.slice(5));

    }
  }
}