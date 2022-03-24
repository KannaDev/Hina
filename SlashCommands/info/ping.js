const Discord = require('discord.js');
const { Client, CommandInteraction } = require("discord.js");
module.exports = {
    name: "ping",
    description: "Shows the current ping of the bot.",

    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    
    run: async (client, interaction, args) => {
        const embed = new Discord.MessageEmbed()
        .setColor('GREEN')
        .setDescription(`**Ping:**\n${client.ws.ping}ms!`)
        interaction.followUp({ embeds: [embed] });
    },
};

