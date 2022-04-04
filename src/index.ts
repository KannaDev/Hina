import { config } from "dotenv"
import { Hina } from "./structures/Client"
import fs from "fs"
import chalk from "chalk"
const log = console.log
config()
export const client = new Hina()

try {
  const data = fs.readFileSync(`${process.cwd()}/hina.txt`, "utf8")
  log(chalk.magenta(data))
} catch (err) {
  console.error(err)
}

client.start()
