const { Client } = require('klasa');

new Client({
    fetchAllMembers: false,
    prefix: '+',
    commandEditing: true,
    typing: true,
    providers: { default: 'mongodb' },
    gateways: {
        guilds: { provider: 'mongodb' },
        users: { provider: 'mongodb' }
    },
    readyMessage: (client) => `${client.user.tag}, Ready to serve ${client.guilds.size} guilds and ${client.users.size} users`
}).login(process.env.BOT_TOKEN);