module.exports = {
    name:'ban',
    description:'bans a member',
    requiredPermissions: ["ADMINISTRATOR", "BAN_MEMBERS"],
    execute(message,args, cmd, client, Discord){
        const target = message.mentions.users.first();
        if(target){
         const memberTarget = message.guild.members.cache.get(target.id);
         memberTarget.ban();
         message.channel.send('Uživatel byl zabanován.');
        }else{
            message.channel.send('Tento uživatel nejde zabanovat');
        }
    }
 
 }