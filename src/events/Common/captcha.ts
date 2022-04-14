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
    toggle = data.enabled
  console.log(channel)
  console.log(toggle)
})
