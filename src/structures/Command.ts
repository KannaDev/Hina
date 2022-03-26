import { CommandTypes } from "../types/CommandTypes";

export class Command {
    constructor(commandOptions: CommandTypes) {
        Object.assign(this, commandOptions)
    }
}