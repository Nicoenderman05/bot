const { MessageEmbed } = require('discord.js')

module.exports.run = async (client, message, args) => {

    const { red, errc } = require('../colors.json')

    let suc = new MessageEmbed()
    .setAuthor(client.user.username, client.user.avatarURL())
    .setTitle(`Bot hilfe`)
    .setDescription(`Hier Findest du die Bot CMDS`)
    .addField('!jobs', `Siehts du die Ingame Jobs`)
    .addField('!fraktionen', `Siehts du die fraktionen die noch frei/Vergeben sind`)    
    .addField('!login', `Loggst du dich einloggen`)
    .addField('!logout', `Loggst du dich aus!`)
    .setTimestamp()
    .setColor(red)

    message.channel.send(suc)
}