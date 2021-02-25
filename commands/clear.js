module.exports = {
    run: async(message, args) => {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('Vous n\'avez pas la permission !')
        const count = args[0]
        if (!/\d+/.test(count)) return message.channel.send('Choisi un nombres')
        if (count < 1 || count > 99) return message.channel.send('entre 1 et 100 conanrd')
        const { size } = await message.channel.bulkDelete(Number(count) + 1, true)
        message.channel.send(`${size - 1} messages ont été supprimés !`).then(sent => sent.delete({ timeout: 5e3 }))
    },
    name: 'clear'
}