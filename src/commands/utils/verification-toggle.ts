import { Command } from "../../structures/Command"
import { Embed } from "../../structures/Embed"
import mongoose from "mongoose"
import { verificationSchemaa } from "../../database/schemas/verification"
export default new Command({
  name: "verification-toggle",
  description: "🔨 | Toggle verification.",
  userPermissions: ["ADMINISTRATOR"],
  options: [
    {
      name: "verification-toggle",
      type: "BOOLEAN",
      description: "🔨 | The config setting",
      required: true,
    },
  ],
  run: async ({ interaction, args, client }) => {
    const boolean = interaction.options.getBoolean("verification-toggle")
    await verificationSchemaa.updateOne({
      enabled: boolean,
    })
    interaction.reply({
      embeds: [
        new Embed(
          {
            title: "Verification has been toggled",
            description: `Been set to ${boolean}`,
          },
          interaction
        ),
      ],
    })
  },
})
