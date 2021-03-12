const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('guildMemberAdd', member => {
   
   let memberavatar = member.user.avatarURL
        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField(':bust_in_silhouette: | name : ', `${member}`)
        .addField(':_staranimated: | Welcome!', `Welcome to the server, ${member}`)
        .addField(':yeet: | Your are the member', `${member.guild.memberCount}`)
        .addField('Server', `${member.guild.name}`, true )
        .setFooter(`**${member.guild.name}**`)
        .setTimestamp()
        .setAuthor("WELCOME TO THG HUB "+client.user.username,"https://discord.com/channels/@me/740894288094691418/819652343657136138")



client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'welcome');
    let memberavatar = member.user.avatarURL
        if (!channel) return;
        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField(':bust_in_silhouette: | name : ', `${member}`)
        .addField('::_staranimated: | Welcome!', `Welcome to the server, ${member}`)
        .addField(':yeet: | Your are the member', `${member.guild.memberCount}`)
        .addField('Server', `${member.guild.name}`, true )
        .setFooter(`**${member.guild.name}**`)
        .setTimestamp()
        .setAuthor("WELCOME TO THG HUB "+client.user.username,"https://discord.com/channels/@me/740894288094691418/819652343657136138")



        channel.sendEmbed(embed);
});



client.on('guildMemberRemove', member => {
    let channel = member.guild.channels.find('name', 'leave');
    let memberavatar = member.user.avatarURL
        if (!channel) return;
        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField('Name:', `${member}`)
        .addField('Has Let the Server', ';(')
        .addField('Bye Bye :(', 'We will all miss you!')
        .addField('The server now as', `${member.guild.memberCount}` + " members")
        .setFooter(`**${member.guild.name}`)
        .setTimestamp()

        channel.sendEmbed(embed);
});


    

client.login('ODE5ODMwMjE1NjAwODk4MDU5.YEsUYw.cNh2XwHZmCesSnYjJM6kZjZupm0');
  