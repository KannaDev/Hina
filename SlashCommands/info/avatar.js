const { Client, CommandInteraction, MessageEmbed } = require('discord.js');
  
  module.exports = {
    name: 'avatar',
    description: 'Display a users Avatar.',
    options: [{
      name: "target",
      description: "Display a users Avatar.",
      type: "USER",
      required: false,
    }],
    /** 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     * @param {String[]} args 
     */
    run: async (client, interaction, args) => {
      const target = interaction.options.getUser("target") || interaction.user
      const embed = new MessageEmbed()
        .setTitle(`${target.username}'s Avatar`)
        .setImage(target.displayAvatarURL({ dynamic: true, size: 4096 }))
        .setColor("#F8C8DC")
      interaction.editReply({ embeds: [embed] })
    }
  }