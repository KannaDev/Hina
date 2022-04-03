import { Event } from "../../structures/Event"
import { client } from "../../"
import { MessageEmbed } from "discord.js"
export default new Event("ready", interaction => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  require("console-stamp")(console, "HH:MM:ss")
  console.log(`${client.user.username} is now online`)
  console.log(`Guilds: ${client.guilds.cache.size}`)
  console.log(`Users: ${client.users.cache.size}`)
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const revision = require("child_process")
    .execSync("git rev-parse HEAD")
    .toString()
    .trim()
    .toString()
    .trim()
  const information = new MessageEmbed()
    .setTitle("Client Info")
    .setDescription(
      `Guilds: ${client.guilds.cache.size}\nUsers: ${client.users.cache.size}\nCurrent Version: [${revision}](https://github.com/KannaDev/Hina/commit/${revision})`
    )

  client.users.fetch("317728561106518019").then(owner => {
    owner.send({ embeds: [information] })
  })
})
