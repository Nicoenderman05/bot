const { MessageEmbed, Client } = require(`discord.js`);
const Enmap = require(`enmap`);
const { join } = require(`path`);
const fs = require(`fs`);

const client = new Client({ disableEveryone: true});
const config = require(`./config.json`)

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(`.`)[0];
    client.on(eventName, event.bind(null, client));
  });
});

client.commands = new Enmap();

  var today = new Date();
  var time = `${today.getFullYear()}.${(today.getMonth() + 1)}.${today.getDate()} at ${today.getHours()}:${today.getMinutes()}`
  if(today.getMinutes >= 10) { `${today.getFullYear()}.${(today.getMonth() + 1)}.${today.getDate()} at ${today.getHours()}:${today.getMinutes()}` } else if(today.getMinutes <= 10) { time = `${today.getFullYear()}.${(today.getMonth() + 1)}.${today.getDate()} at ${today.getHours()}:0${today.getMinutes()}` }

  fs.readdir("./commands/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
      if (!file.endsWith(`.js`)) return;
      let folder = require(`./commands/${file}`);
      let commandName = file.split(`.`)[0];
        console.log(`[${time}] [System] Loaded ${commandName}.js`);
      client.commands.set(commandName, folder);
    });
  });

client.login(config.TOKEN)