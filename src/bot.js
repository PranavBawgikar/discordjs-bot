require('dotenv').config()

const { Client, GatewayIntentBits } = require('discord.js') //Client is a class that allows us to interact with the Discord API

const client = new Client({ intents: [GatewayIntentBits.Guilds] }) //Creating an instance of the Client class

client.on('ready', () => {
    console.log(`${client.user.tag} just landed.`)
})

client.on('message', (message) => {
    console.log(`[${message.author.tag}]: ${message.content}`)
    if(message.content === 'Howdy') {
        message.reply('What up homie')
    }
})

client.login('')

