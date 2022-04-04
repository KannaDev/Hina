import { Command } from "../../structures/Command"
import { Embed } from "../../structures/Embed"

export default new Command({
    name: "commands",
    description: "🤍 | See Hina's Commands.",
  run: async ({ interaction, args }) => {
    interaction.reply({
      embeds: [
        new Embed(
          {
            title: "Hina's Commands",
            url: "https://github.com/KannaDev/Hina/wiki",
            description: "View the Wiki for all of the possible commands!"
          },
          interaction
        ),
      ],
    })
  },
})
