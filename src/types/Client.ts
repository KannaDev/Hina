import { ApplicationCommandDataResolvable, Guild, User } from "discord.js";

export interface RegisterCommandsOptions {
  guildId?: string;
  commands: ApplicationCommandDataResolvable[];
}
