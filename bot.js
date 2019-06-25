var Discord = require('discord.js');
var fs = require('fs');
var client = new Discord.Client();

client.on('ready', () => {
  console.log(`Welcome Bro ${client.user.tag}!`);
});

client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : EX Clan`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : EX Clan ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`أنـا آسـف ، ما كـان المفروض أسـوي اللي سويته …:broken_heart:`,"http://twitch.tv/Death Shop")
client.user.setStatus("online")
});

client.login(process.env.BOT_TOKEN);// صنعت لدى محمد دوله
