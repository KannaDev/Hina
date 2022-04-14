import { Event } from "../../structures/Event"
import { verificationSchemaa } from "../../database/schemas/verification"
export default new Event("guildCreate", async guild => {
  await verificationSchemaa.create({ guildID: guild.id })
  console.log("I have joined a new server!")
})
