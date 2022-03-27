import { Event } from "../../structures/Event";
import { client } from "../../"
function delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}
const { MessageEmbed } = require('discord.js');
export default new Event("ready", (interaction) => {
    console.log(`${client.user.username} is now online`);
    console.log(`Guilds: ${client.guilds.cache.size}`);
    console.log(`Users: ${client.users.cache.size}`);

        const boop = new MessageEmbed()
        .setTitle("heya")
        client.users.fetch('317728561106518019').then(owner => {
            owner.send({ embeds: [boop] })
        })
});