import {
  ApplicationCommandDataResolvable,
  Client,
  ClientEvents,
  Collection,
} from 'discord.js'
import { CommandTypes } from '../types/CommandTypes'
import glob from 'glob'
import { promisify } from 'util'
import { RegisterCommandsOptions } from '../types/Client'
import { Event } from './Event'
import Connect from '../database'
import { Config } from '../types/Config'
const globPromise = promisify(glob)

export class Hina extends Client {
  commands: Collection<string, CommandTypes> = new Collection()
  config: Config = { colour: [248, 200, 220] }
  constructor() {
    super({ intents: 32767 })
  }

  start() {
    this.registerModules()
    this.login(process.env.TOKEN)
  }
  async importFile(filePath: string) {
    return (await import(filePath))?.default
  }

  async registerCommands({ commands, guildId }: RegisterCommandsOptions) {
    if (guildId) {
      this.guilds.cache.get(guildId)?.commands.set(commands)
      console.log(`Registering commands to ${guildId}`)
    } else {
      this.application?.commands.set(commands)
      console.log('Registering global commands')
    }
  }

  async registerModules() {
    Connect()
    const slashCommands: ApplicationCommandDataResolvable[] = []
    const commandFiles = await globPromise(
      `${__dirname}/../commands/**/*{.ts,.js}`
    )
    commandFiles.forEach(async filePath => {
      const command: CommandTypes = await this.importFile(filePath)
      if (!command.name) return
      this.commands.set(command.name, command)
      slashCommands.push(command)
    })

    this.on('ready', () => {
      this.registerCommands({
        guildId: `${process.env.GUILD_ID}`,
        commands: slashCommands,
      })
    })

    const eventFiles = await globPromise(`${__dirname}/../events/**/*{.ts,.js}`)
    eventFiles.forEach(async filePath => {
      const event: Event<keyof ClientEvents> = await this.importFile(filePath)
      this.on(event.event, event.run)
    })
  }
}
