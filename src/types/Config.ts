import { ColorResolvable } from "discord.js";

export interface Config {
  colour: ColorResolvable;
  owner_ids?: Array<string>;
}