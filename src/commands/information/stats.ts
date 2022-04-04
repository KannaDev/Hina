import { version } from "discord.js"
import { Command } from "../../structures/Command"
import { Embed } from "../../structures/Embed"
import duration from "humanize-duration"

export default new Command({
  name: "stats",
  description: "🤍 | See hina's statistics!",
  run: async ({ interaction, client }) => {
    interaction.reply({
      embeds: [
        new Embed(
          {
            title: "Hina's Statistics",
            fields: [
              {
                name: "Versions",
                value: `**Node:** ${process.version}\n**D.JS:** v${version}`,
                inline: true,
              },
              {
                name: "\u200B",
                value: "\u200B",
                inline: true,
              },
              {
                name: "Statistics",
                value: `**Users:** ${
                  client.users.cache.filter(f => !f.bot).size
                }\n**Guilds:** ${client.guilds.cache.size}`,
                inline: true,
              },
              {
                name: "Uptime",
                value: `${duration(client.uptime, { round: true })}`,
              },
            ],
          },
          interaction
        ),
      ],
    })
  },
})
