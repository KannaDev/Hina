import { Command } from "../../structures/Command"
import { Embed } from "../../structures/Embed"
import mongoose from "mongoose"
import { verificationSchemaa } from "../../database/schemas/verification"
export default new Command({
  name: "setrole",
  description: "🔨 | Setup the Verification channel!",
  userPermissions: ["ADMINISTRATOR"],
  options: [
    {
      name: "setrole",
      type: "ROLE",
      description: "🔨 | The config setting",
      required: true,
    },
  ],
  run: async ({ interaction, args, client }) => {
    const interaction_role = interaction.options.getRole("setrole")
    console.log(interaction_role)
    const guild = interaction.guild
    const guildSettings = await verificationSchemaa.findOne({
      guildID: guild.id,
    })
    await guildSettings.updateOne({
      roleID: interaction_role,
    })
    interaction.reply({
      embeds: [
        new Embed(
          {
            title: "Verification Role Set",
            url: "https://github.com/KannaDev/Hina/wiki/Verification",
            description: `${interaction_role} has been set as the Verification role.`,
          },
          interaction
        ),
      ],
    })
  },
})
