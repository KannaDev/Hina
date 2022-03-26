import { Schema, Document, model, Types } from "mongoose";

export interface Crate {
  type: "Common" | "Uncommon" | "Rare" | "Epic" | "Legendary" | "Unobtainable";
  name: string;
  description: string;
  obtained: number;
  gifted?: boolean;
}

export interface Item {
  type: "Fishing" | "Mining" | "Utility";
  rarity:
    | "Common"
    | "Uncommon"
    | "Rare"
    | "Epic"
    | "Legendary"
    | "Unobtainable";
  name: string;
  description: string;
  obtained: number;
  gifted?: boolean;
  durabilty?: number;
}

export interface User extends Document {
  userId: string;
  bronze: number;
  silver: number;
  gold: number;
  crates: Array<Crate>;
  items: Array<Item>;
}

const schema = new Schema({
  userId: { type: String },
  bronze: { type: Number },
  silver: { type: Number },
  gold: { type: Number },
  crates: { type: Array },
  items: { type: Array },
});

export default model("Users", schema);
