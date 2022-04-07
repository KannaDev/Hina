import { Command } from "../../structures/Command"
import { Embed } from "../../structures/Embed"
import mongoose from "mongoose"
import { verificationSchemaa } from "../../database/schemas/verification"
export default new Command({
  name: "setchannel",
  description: "🔨 | Setup the Verification channel!",
  userPermissions: ["ADMINISTRATOR"],
  options: [
    {
      name: "setchannel",
      type: "CHANNEL",
      description: "🔨 | The config setting",
      required: true,
    },
  ],
  run: async ({ interaction, args, client }) => {
    const interaction_channel = interaction.options.getChannel("setchannel")
    console.log(interaction_channel)
    await verificationSchemaa.updateOne({
      channelID: interaction_channel,
    })
    interaction.reply({ content: "channel set" })
  },
})
