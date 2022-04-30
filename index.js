const Discord = require("discord.js")
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_EMOJIS_AND_STICKERS", "GUILD_MESSAGES", "GUILD_MESSAGE_REACTIONS", "DIRECT_MESSAGE_TYPING"] })

client.login("OTY5NjYzNDI5OTk4NzA2NzU4.YmwrcQ.Ya89yGGRMoyuORQEwFXyYV8S6QQ")

client.on("messageCreate", message => {
    if (message.content == "!verifica") {
        {
            if (!message.member.permissions.has("ADMINISTRATOR")) return
        }
        let embed = new Discord.MessageEmbed()
            .setTitle("Verifica")
            .setDescription("Benvenuto su ButterMC, clicca il bottone sottostante per verificarti!")
            .setColor("#af72ff")

        let button1 = new Discord.MessageButton()
            .setLabel("Verifica")
            .setStyle("SUCCESS")
            .setCustomId("verificabottone")

        let row = new Discord.MessageActionRow()
            .addComponents(button1)

        message.channel.send({ embeds: [embed], components: [row] })
    }
});

client.on("interactionCreate", interaction => {
    if (!interaction.isButton()) return

    if (interaction.customId == "verificabottone") {
        let member = interaction.member;
        member.roles.add("970032656693747742")
        interaction.deferUpdate()
    }
})