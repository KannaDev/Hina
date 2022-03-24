const { Client, Collection } = require("discord.js");

const client = new Client({
    intents: 32767,
});
module.exports = client;
const dotenv = require('dotenv');
dotenv.config();
// Global Variables
client.slashCommands = new Collection();
// Initializing the project
require("./handler")(client);
client.login(process.env.DISCORD_TOKEN);
