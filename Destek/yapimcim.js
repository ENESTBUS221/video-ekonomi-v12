const Discord = require('discord.js')
exports.run = function(client, message, args) {
let davet = new Discord.MessageEmbed()
.setTitle("Suspects Ekonomi | Yapımcım")
.setDescription(`
**Botu Kodlayan** | **\`Suspects\`**

**Botun Sahibi** | **Suspects**

[Destek olan Suspects'a Teşekkür Ederiz!]() )
`)
  return message.channel.send(davet)
  
};
exports.conf = {
    enabled: true, 
    aliases: ["yapimcim","yapımcı","yapimci"],
  };
  
  exports.help = {
    name: 'yapımcım'
  };