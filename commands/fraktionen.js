const { MessageEmbed } = require('discord.js')

module.exports.run = async (client, message, args) => {

    const { norc, errc } = require('../colors.json')

    let suc = new MessageEmbed()
    .setAuthor(client.user.username, client.user.avatarURL())
    .setTitle(`Franktionen`)
    .setDescription(`Hier Finedest du die Franktionen und die Chefs`)
    .addField('POLIZEI', 'Polzei Chef: <@719557531021738057>\n\ Polizei Präsident: <@664487316735393802>')
    .addField('MEDICAL', 'Frei')
    .addField('CARDEALER', 'Chef: <@643031428963237888>\n\ Stlv. Chef: wird gesucht')
    .addField('ADAC', 'Frei')
    .addField('GANG', 'Vagos: Frei\n\ Grove: Frei')
    .setTimestamp()
    .setColor(norc)

    message.channel.send(suc)

}