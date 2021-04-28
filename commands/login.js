const { MessageEmbed } = require('discord.js')
const fs = require('fs')
const { norc, errc } = require('../colors.json')

module.exports.run = (client, message, args) => {

    const db = JSON.parse(fs.readFileSync('./databases/data.json', 'utf8'));
    const data = db[message.author.id]

    if(!data) {

        let err = new MessageEmbed()
        .setAuthor(client.user.username, client.user.avatarURL())
        .setTitle(`FEHLER`)
        .setDescription(`Es wurde kein von dir registrierter Account gefunden.`)
        .setTimestamp()
        .setColor(errc)

        message.channel.send(err)

    } else if(data.online == "true") {
        
            let err = new MessageEmbed()
            .setAuthor(client.user.username, client.user.avatarURL())
            .setTitle(`FEHLER`)
            .setDescription(`Du bist bereits angemeldet!`)
            .setTimestamp()
            .setColor(errc)

            message.channel.send(err)
        
        } else {

        db[message.author.id] = {
            "name1": data.name1,
            "name2": data.name2,
            "gender": data.gender,
            "size": data.size,
            "job": data.job,
            "online": "true"
        }

        fs.writeFile("./databases/data.json", JSON.stringify(db), x => {
            if (x) console.error(x);
        });
          
        let suc = new MessageEmbed()
        .setAuthor(client.user.username, client.user.avatarURL())
        .setTitle(`ANMELDUNG`)
        .setDescription(`Du wurdest erfolgreich angemeldet.`)
        .setTimestamp()
        .setColor(norc)

        message.channel.send(suc)

    }

    message.delete()

}