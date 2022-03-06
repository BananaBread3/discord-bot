module.exports = {
    name: 'pong',
    description: "pong command",
    execute(message,args, cmd, client, Discord){
        message.channel.send('ping');
        message.channel.send('ping');
    }
}