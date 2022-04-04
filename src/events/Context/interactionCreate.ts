import { CommandInteractionOptionResolver } from "discord.js"
import Users from "../../database/schemas/Users"
import { client } from "../../index"
import { Event } from "../../structures/Event"
import { Extendedinteraction } from "../../types/CommandTypes"

export default new Event("interactionCreate", async interaction => {
  try {
    if (interaction.isCommand()) {
      const command = client.commands.get(interaction.commandName)
      console.log(interaction.commandName)
      if (!command) {
        return interaction.reply({
          content:
            "That command doesn't exist, please try again later or contact me at: Runa ٩(＾◡＾)۶#0666'",
          ephemeral: true,
        })
      }
      const userData = await Users.findOne({
        userId: interaction.member.user.id,
      })
      command.run({
        args: interaction.options as CommandInteractionOptionResolver,
        client,
        interaction: interaction as Extendedinteraction,
        userData: userData,
      })
    }
  } catch (err) {
    console.log(err)
  }
})
