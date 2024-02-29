require('dotenv').config()

const { Client, GatewayIntentBits } = require('discord.js') //Client is a class that allows us to interact with the Discord API

const client = new Client({ intents: [GatewayIntentBits.Guilds] }) //Creating an instance of the Client class

client.login('MTIxMjY1Njk5MDQxMzkyMjMzNA.GcUMrr.55j1obTn8dmAO7hcO25-0M3iGEndRmbZF8652U')

