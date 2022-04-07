import { Document, model, Schema, models } from 'mongoose'

interface verificationData extends Document {
    guildID: string;
    channelID: string;
    serverID: string;
}

export type verification = {
    guildID: string;
    channelID: string;
    serverID: string;
}

const verificationSchema = new Schema<verificationData>({
    guildID: String,
    channelID: String,
    serverID: String
})

export const verificationSchemaa = models.verificationSchema || model('verification', verificationSchema);