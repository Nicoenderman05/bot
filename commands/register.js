const { MessageEmbed } = require('discord.js')
const fs = require('fs')
const { norc, errc } = require('../colors.json')

module.exports.run = async (client, message, args) => {

    if(message.author.id == "664487316735393802", "643031428963237888") {

        let author = message.author;
        let authorid = author.id;

        var userid;
        var name1;
        var name2;
        var gender;
        var size;
        var job;

        let db = JSON.parse(fs.readFileSync("./databases/data.json", "utf8"));

        let suc = new MessageEmbed()
        .setAuthor(client.user.username, client.user.avatarURL())
        .setTitle(`REGISTRATION`)
        .setDescription(`Bitte gebe die Discord User ID an.`)
        .setTimestamp()
        .setColor(norc)
                
        const msg = await message.channel.send(suc)

        const filter = response => {
            return response.author.id === authorid;
        }

        message.channel.awaitMessages(filter, { max: 1, time: 60000 })
        .then(collected => {

            // USER ID

            const response = collected.first();
            userid = response.content;

            let suc = new MessageEmbed()
            .setAuthor(client.user.username, client.user.avatarURL())
            .setTitle(`REGISTRATION`)
            .setDescription(`Bitte gebe den Vornamen des Benutzers an.`)
            .setTimestamp()
            .setColor(norc)
    
            msg.edit(suc)

            message.channel.awaitMessages(filter, { max: 1, time: 60000 })
            .then(collected => {

                // NAME1

                const response = collected.first();
               name1 = response.content;

               let suc = new MessageEmbed()
               .setAuthor(client.user.username, client.user.avatarURL())
               .setTitle(`REGISTRATION`)
               .setDescription(`Bitte gebe den Nachnamen des Benutzers an.`)
               .setTimestamp()
               .setColor(norc)
       
               msg.edit(suc)

                message.channel.awaitMessages(filter, { max: 1, time: 60000 })
                .then(collected => {

                    // NAME2

                    const response = collected.first();
                    name2 = response.content;

                    let suc = new MessageEmbed()
                    .setAuthor(client.user.username, client.user.avatarURL())
                    .setTitle(`REGISTRATION`)
                    .setDescription(`Bitte gebe das Geschlecht der Person an. [\`M\`/\`W\`]`)
                    .setTimestamp()
                    .setColor(norc)
            
                    msg.edit(suc)

                    message.channel.awaitMessages(filter, { max: 1, time: 60000 })
                    .then(collected => {

                        // GENDER

                        const response = collected.first();

                        let RSP = ["M", "W", "m", "w"]

                        if(RSP.some(r => {r === response.content})) {

                            let err = new MessageEmbed()
                            .setAuthor(client.user.username, client.user.avatarURL())
                            .setTitle(`FEHLER`)
                            .setDescription(`${response.content} ist kein gültiges Geschlecht!`)
                            .setTimestamp()
                            .setColor(errc)
                                    
                            return msg.edit(err)

                        } else {

                            gender = response.content;

                            let suc = new MessageEmbed()
                            .setAuthor(client.user.username, client.user.avatarURL())
                            .setTitle(`REGISTRATION`)
                            .setDescription(`Bitte gebe die größe des Benutzers an.`)
                            .setTimestamp()
                            .setColor(norc)
                    
                            msg.edit(suc)

                            message.channel.awaitMessages(filter, { max: 1, time: 60000 })
                            .then(collected => {

                                // SIZE

                                const response = collected.first();
                                size = response.content;    
                                
                                //\n\`\` 

                                let suc = new MessageEmbed()
                                .setAuthor(client.user.username, client.user.avatarURL())
                                .setTitle(`REGISTRATION`)
                                .setDescription(`Bitte gebe den Job an.`)
                                .addField('SEK', '`S1\` SEK - Chef\n\`S2\` SEK - Stellvertretener Chef\n\`S3\` SEK - Angestellter\n\`S4\` SEK - Azubi')
                                .addField('POLIZEI', '`P1\` Polizei  - Präsident\n\`P2\` Polizei - Direktor\n\`P3\` Polizei - Oberrat\n\`P4\` Polizei - Rat\n\`P5\` Polizei - Oberkomissar\n\`P6\` Polizei - Hauptkomissar\n\`P7\` Polizei - Komissar\n\`P8\` Polizei - Obermeister\n\`P9\` Polizei - Hauptmeister\n\`P10\` Polizei - Meister\n\`P11\` Polizist - Meisteranwärter')
                                .addField('MEDICAL', '\`M1\` Medical - Chefarzt\n\`M2\` Medical - Stellvertretener Chefarzt\n\`M3\` Medical - Facharzt\n\`M4\` Medical - Artzt\n\`M5\` Medical - Azubi')
                                .addField('CARDEALER', '\`C1\` Cardealer - Chef\n\`C2\` Cardealer - Stellvertretener Chef\n\`C3\` Cardealer - Mitarbeiter\n\`C4\` Cardealer - Azubi')
                                .addField('ADAC', '\`A1\` ADAC - Chef\n\`A2\` ADAC - Stellvertretener Chef\n\`A3\` ADAC - Mitarbeiter\n\`A4\` ADAC - Azubi')
                                .addField('GANG', '\`G1\` Gang - Vagos\n\`G2\` Gang - Groove')
                                .setTimestamp()
                                .setColor(norc)
                        
                                msg.edit(suc)

                                message.channel.awaitMessages(filter, { max: 1, time: 60000 })
                                .then(collected => {
        
                                    // JOB
        
                                    const response = collected.first();
                                    job = response.content;

                                    let suc = new MessageEmbed()
                                    .setAuthor(client.user.username, client.user.avatarURL())
                                    .setTitle(`REGISTRATION`)
                                    .setDescription(`Die Registration ist nun abgeschlossen. Danke für deine Gedult!`)
                                    .setTimestamp()
                                    .setColor(norc)
                                
                                    msg.edit(suc)

                                    db[userid] = {
                                        "name1": name1,
                                        "name2": name2,
                                        "gender": gender,
                                        "size": size,
                                        "job": job,
                                        "online": "false"
                                      };

                                      fs.writeFile("./databases/data.json", JSON.stringify(db), x => {
                                        if (x) console.error(x);
                                      });

                                })
                            })
                        }   
                    })
                })
            }) 
        })

    } else {

        let err = new MessageEmbed()
        .setAuthor(client.user.username, client.user.avatarURL())
        .setTitle(`FEHLER`)
        .setDescription(`Um diesen Befehl ausführen zu dürfen, benötigst du die Berechtigung \`ADMIN_REGISTER\``)
        .setTimestamp()
        .setColor(errc)
                
        message.channel.send(err)

    }

}