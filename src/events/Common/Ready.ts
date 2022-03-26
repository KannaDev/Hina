import { Event } from "../../structures/Event";
import { client } from "../../"
export default new Event(`ready`, () => {
    console.log(`${client.user.username} is now online`);
    console.log(`Guilds: ${client.guilds.cache.size}`);
    console.log(`Users: ${client.users.cache.size}`);
})