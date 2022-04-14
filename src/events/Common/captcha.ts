import { Event } from "../../structures/Event"
import { client } from "../../"
import { MessageEmbed } from "discord.js"
//import { verificationSchemaa } from "../../database/schemas/verification"
import { verificationSchemaa } from "../../database/schemas/verification"
import { Captcha } from "discord.js-captcha"
export default new Event("guildMemberAdd", async member => {
  const guild = member.guild

  const data = await verificationSchemaa.findOne({
    guildID: guild.id,
  })

  const channel = data.channelID,
    toggle = data.enabled,
    guildID = data.guildID,
    roleID = data.roleID
  console.log(channel)
  console.log(toggle)
  console.log(guildID)
  console.log(roleID)
  if (data.enabled === true) {
    try {
      const captcha = new Captcha(client, {
        guildID: guildID,
        roleID: roleID,
        channelID: channel,
        sendToTextChannel: true,
        kickOnFailure: true,
        caseSensitive: false,
        attempts: 3,
        timeout: 30000,
        showAttemptCount: true,
        customPromptEmbed: new MessageEmbed().setTitle("Captcha Verification"),
        customSuccessEmbed: new MessageEmbed()
          .setTitle("✅")
          .setDescription("Successfully Verified."),
        customFailureEmbed: new MessageEmbed()
          .setTitle("❌")
          .setDescription("Failed Verification."),
      })
      captcha.present(member)
    } catch (err) {
      console.log(err)
    }
  }
})
