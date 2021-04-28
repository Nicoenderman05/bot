const { MessageEmbed } = require(`discord.js`);
module.exports = async (client, message) => {

  var today = new Date();
  var time = today.getFullYear() + `.` + (today.getMonth() + 1) + `.` +  today.getDate() + ` at ` + today.getHours() + `:` + today.getMinutes()
  if(today.getMinutes >= 10) { time = today.getFullYear() + `.` + (today.getMonth() + 1) + `.` + today.getDate() + ` at ` + today.getHours() + `:` + today.getMinutes() } else if(today.getMinutes <= 10) { time = today.getFullYear() + `.` + (today.getMonth() + 1) + `.` +  today.getDate() + ` at ` + today.getHours() + `0:` + today.getMinutes() }

  console.log(`[${time}] [Ready] ${client.user.tag} started!`)
  console.log(`[${time}] [Ready] ${client.guilds.cache.size} Server`)
  console.log(`[${time}] [Ready] ${client.users.cache.size} User`)
  

  let statuse = [
    `mit Wartungen`,
    `in der v.0.2`,
    `auf Modern-Life`
  ];

  setInterval(function() {
    let status = statuse[Math.floor(Math.random() * statuse.length)];

    client.user.setActivity(status, { type: `PLAYING` });
  }, 10000);
  
}
