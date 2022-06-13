const Discord = require("discord.js");
const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES

    ]
});


Client.on("ready", () => {
    console.log("bot opérationnel");
});

Client.on("guildMemberAdd", member => {
    console.log("un membre est arrivé");
    Client.channels.cache.get("975479316873879552").send(member.displayName + " arrived.");

})

Client.on("guildMemberRemove", member => {
    console.log("un membre a quitté le serveur");
    Client.channels.cache.get("975479316873879552").send(member.displayName + " leave!")
})


Client.on("interactionCreate", interaction => {
    if(interaction.isCommand()){
        if(interaction.commandName === "ping"){
            let user = interaction.options.getUser("utilisateur");

            if(user != undefined){
                //@id
                interaction.reply("pong <@" + user.id + ">");
            }
            else{
                interaction.reply("pong");
            }
            interaction.reply("pong");
        }
    }
})
Client.on("messageCreate", message => {
    if (message.author.bot) return;

    //+help
    if(message.content === prefix + "help"){
        const embed = new Discord.MessageEmbed()
            .setColor("DARK_RED")
            .setTitle("Commands List")
            .setURL("https://discord.js.org/")
            .setAuthor("spec", "https://i.imgur.com/lz3KFU6.png", "https://github.com/spec-apt")
            .setDescription("Here you will find the list of commands")
            .setThumbnail("https://i.imgur.com/lz3KFU6.png")
            .addField("+help", "Displays the list of commands")
            .addField("+ping", "Returns pong")
            .setTimestamp()
            .setFooter("spec", "https://i.imgur.com/lz3KFU6.png");
            
        message.channel.send({ embeds: [embed]});
    }
    
});

Client.login("YOUR TOKEN HERE")





