const { Discord, MessageEmbed } = require(`discord.js`)
const fs = require(`fs`)

module.exports = async (client, message) => {
  const prefix = "!"

  if (message.author.bot) return;
  if (!message.channel.id) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);

  const command = args.shift().toLowerCase();
  const cmd = client.commands.get(command);

  if (message.content.indexOf(prefix) !== 0) return;
  if(!cmd) return

  /*if(message.author.id == "643031428963237888") {
    message.delete()

    let err = new MessageEmbed()
    .setAuthor(client.user.username, client.user.avatarURL())
    .setTitle(`FEHLER`)
    .setDescription(`Du hast keine berechtigung zu schreiben. Dazu benötigst du die Berechtigung \`SEND_MESSAGES\``)
    .setTimestamp()
    .setColor("#E73817")

    message.channel.send(err)

  }*/

  cmd.run(client, message, args)
}
