import { config } from 'dotenv'
import { Hina } from './structures/Client'
config()
export const client = new Hina()

client.start()
