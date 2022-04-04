import {
  ChatInputApplicationCommandData,
  CommandInteraction,
  CommandInteractionOptionResolver,
  GuildMember,
  PermissionResolvable,
} from "discord.js"
import { User } from "../database/schemas/Users"
import { Hina } from "../structures/Client"

export interface Extendedinteraction extends CommandInteraction {
  member: GuildMember
}

interface RunOptions {
  client: Hina
  interaction: Extendedinteraction
  args: CommandInteractionOptionResolver
  userData: User
}

type RunFun = (options: RunOptions) => any

export type CommandTypes = {
  userPermissions?: PermissionResolvable[]
  run: RunFun
} & ChatInputApplicationCommandData
