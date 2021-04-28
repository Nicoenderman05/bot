const { MessageEmbed } = require('discord.js')

module.exports.run = async (client, message, args) => {

    const { norc, errc } = require('../colors.json')

    let suc = new MessageEmbed()
    .setAuthor(client.user.username, client.user.avatarURL())
    .setTitle(`SERVER JOBS`)
    .setDescription(`Hier findest du alle Jobs, welche derzeitig registriert sind`)
    .addField('SEK', '`S1\` SEK - Chef\n\`S2\` SEK - Stellvertretener Chef\n\`S3\` SEK - Angestellter\n\`S4\` SEK - Azubi')
    .addField('POLIZEI', '`P1\` Polizei  - Präsident\n\`P2\` Polizei - Direktor\n\`P3\` Polizei - Oberrat\n\`P4\` Polizei - Rat\n\`P5\` Polizei - Oberkomissar\n\`P6\` Polizei - Hauptkomissar\n\`P7\` Polizei - Komissar\n\`P8\` Polizei - Obermeister\n\`P9\` Polizei - Hauptmeister\n\`P10\` Polizei - Meister\n\`P11\` Polizist - Meisteranwärter')
    .addField('MEDICAL', '\`M1\` Medical - Chefarzt\n\`M2\` Medical - Stellvertretener Chefarzt\n\`M3\` Medical - Facharzt\n\`M4\` Medical - Artzt\n\`M5\` Medical - Azubi')
    .addField('CARDEALER', '\`C1\` Cardealer - Chef\n\`C2\` Cardealer - Stellvertretener Chef\n\`C3\` Cardealer - Mitarbeiter\n\`C4\` Cardealer - Azubi')
    .addField('ADAC', '\`A1\` ADAC - Chef\n\`A2\` ADAC - Stellvertretener Chef\n\`A3\` ADAC - Mitarbeiter\n\`A4\` ADAC - Azubi')
    .addField('GANG', '\`G1\` Gang - Vagos\n\`G2\` Gang - Groove')
    .setTimestamp()
    .setColor(norc)

    message.channel.send(suc)

}