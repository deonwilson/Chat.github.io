import { config } from 'dotenv';
config()
export const CHAT_DB_URI = process.env.CHAT_DB_URI || "";
export const PORT = process.env.PORT || "";