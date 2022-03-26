import { GuildMember } from "discord.js";
import { Command } from "../../structures/Command";
import { Embed } from "../../structures/Embed";

export default new Command({
  name: `avatar`,
  description: `🤍 | Get a user's avatar!`,
  options: [
    {
      type: "USER",
      name: `member`,
      description: `✨ | The user!`,
      required: false,
    },
  ],
  run: async ({ interaction, args }) => {
    const member =
      (args.getMember(`member`) as GuildMember) || interaction.member;

    interaction.reply({
      embeds: [
        new Embed(
          {
            title: `${member.user.tag}'s Avatar!`,
            image: {
              url: member.user.displayAvatarURL({
                dynamic: true,
                size: 1024,
              }),
            },
          },
          interaction
        ),
      ],
    });
  },
});
