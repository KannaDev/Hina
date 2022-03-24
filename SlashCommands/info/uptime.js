const Discord = require('discord.js');
const { Client, CommandInteraction } = require("discord.js");
module.exports = {
    name: "uptime",
    description: "Display Hina's Uptime!",

    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    
    run: async (client, interaction, args) => {
        const duration = require('humanize-duration')
        const time = duration(client.uptime, { round: true })  
        const embed = new Discord.MessageEmbed()
            .setColor('GREEN')
            .setDescription(`**Uptime:**\n${time}`)
            interaction.followUp({ embeds: [embed] });
        },
};