import { CommandInteractionOptionResolver } from "discord.js";
import Users from "../../database/schemas/Users";
import { client } from "../../index";
import { Event } from "../../structures/Event";
import { Extendedinteraction } from "../../types/CommandTypes";

export default new Event("interactionCreate", async (interaction) => {
  if (interaction.isCommand()) {
    const command = client.commands.get(interaction.commandName);
    if (!command) return interaction.reply({
        content: "You have used a non existent command",
        ephemeral: true
    });
    const userData = await Users.findOne({userId: interaction.member.user.id})
    command.run({
      args: interaction.options as CommandInteractionOptionResolver,
      client,
      interaction: interaction as Extendedinteraction,
      userData: userData
    });
  }
});
