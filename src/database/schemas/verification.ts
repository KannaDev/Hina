import { Document, model, Schema, models } from "mongoose"

interface verificationData extends Document {
  guildID: string
  channelID: string
  serverID: string
  enabled: boolean
}

export type verification = {
  guildID: string
  channelID: string
  serverID: string
  enabled: boolean
}

const verificationSchema = new Schema<verificationData>({
  guildID: String,
  channelID: String,
  serverID: String,
  enabled: Boolean,
})

export const verificationSchemaa =
  models.verificationSchema || model("verification", verificationSchema)
