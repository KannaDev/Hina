declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DISCORD_TOKEN: string;
      MONGODB: string;
      GUILD_ID: string;
      INVITE: string;
    }
  }
}

export {}
