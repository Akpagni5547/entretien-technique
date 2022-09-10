import { config } from "dotenv";

config();

export const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb+srv://helios:helios@cluster0.p3u8u.mongodb.net/?retryWrites=true&w=majority";