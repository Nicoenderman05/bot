const { Discord, MessageEmbed } = require (`discord.js`)
const fs = require(`fs`)
const { red } = require('../colors.json')

module.exports.run = async (client, message, args) => {
        
        let DEV = ["664487316735393802", "637987364467245077", "706842992081633322", "643031428963237888"]

        if(!DEV.some(i => {i == message.author.id})) {

                let suc = new MessageEmbed()
                .setAuthor(client.user.username, client.user.avatarURL())
                .setTitle(`NEUSTART`)
                .setDescription(`Der Bot wird nun neu gestartet.`)
                .setTimestamp()
                .setColor(red)
                        
                message.channel.send(suc)

                console.log(`Bot reststarted by ` + message.author.tag + ` in the guild ` + message.guild.name + `(` + message.guild.id + `)`)

                var today = new Date();
                var time = today.getFullYear() + `.` + (today.getMonth() + 1) + `.` +  today.getDate() + ` at ` + today.getHours() + `:` + today.getMinutes()
                if(today.getMinutes >= 10) { time = today.getFullYear() + `.` + (today.getMonth() + 1) + `.` + today.getDate() + ` at ` + today.getHours() + `:` + today.getMinutes() } else if(today.getMinutes <= 10) { time = today.getFullYear() + `.` + (today.getMonth() + 1) + `.` +  today.getDate() + ` at ` + today.getHours() + `0:` + today.getMinutes() }

                setTimeout(function() { process.exit() }, 1000)
        }
}