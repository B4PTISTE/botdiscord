const Discord = require('discord.js')

module.exports = {
    run: (message, args) => {

        let gameName = args.slice(0).join(" ")
        if (!gameName) return message.channel.send({ embed: { color: "RED", description: "Tu dois mettre le nom du jeu !" } }).then(sent => sent.delete({ timeout: 4e3 }))

        message.channel.bulkDelete(Number(1), true)
        message.channel.send('Hey @everyone ...'),
            message.channel.send(new Discord.MessageEmbed()
                .setTitle('Molokax est en Live')
                .addField('JEU', gameName)
                .setDescription('Viens vite me voir en Live sur : https://www.twitch.tv/Molokax')
                .setImage('https://cdn.discordapp.com/attachments/808873205590523966/808882947716808744/Molokax-PP-BotDiscord.jpg')
                .setColor('#FF6600')
                .setThumbnail('https://cdn.discordapp.com/attachments/808873205590523966/809069017217499166/NEWLOGO.png')
                .setFooter('Live Twitch', 'https://cdn.discordapp.com/attachments/808873205590523966/808873280067993651/580b57fcd9996e24bc43c540.png')
                .setTimestamp())
    },
    name: 'testmolokax',
    guildOnly: true
}