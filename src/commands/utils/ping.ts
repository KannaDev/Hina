import { Command } from "../../structures/Command";


export default new Command({
    name: `ping`,
    description: `🤍 | See the clients ping!`,
    run: async ({  interaction, client }) => {
            interaction.reply({content: `${client.ws.ping}ms`})
    }
})