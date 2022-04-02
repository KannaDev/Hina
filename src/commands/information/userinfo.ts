import { GuildMember } from 'discord.js'
import { Command } from '../../structures/Command'
import { Embed } from '../../structures/Embed'

export default new Command({
  name: 'userinfo',
  description: '🤍 | View a users info!',
  options: [
    {
      type: 'USER',
      name: 'member',
      description: '✨ | The user you would like to fetch!',
      required: false,
    },
  ],
  run: async ({ interaction, args }) => {
    const member =
      (args.getMember('member') as GuildMember) || interaction.member

    interaction.reply({
      embeds: [
        new Embed(
          {
            title: `${member.user.tag}'s Userinfo!`,
            fields: [
              /*
                            {
                    name: `Nickname`,
                    value: `${member.displayName}`,
                    inline: true,
                 		       },*/
              {
                name: 'Joined',
                value: `${member.joinedAt}`,
                inline: true,
              },
              {
                name: 'Registered',
                value: `${member.user.createdAt}`,
                inline: true,
              },
            ],
          },
          interaction
        ),
      ],
    })
  },
})
