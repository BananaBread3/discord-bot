module.exports = {
    name: 'ping',
    description: "ping command",
    execute(message,args, cmd, client, Discord){
        message.channel.send('pong');
    }
}