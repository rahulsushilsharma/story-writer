import { randomUUID } from "crypto";
import Database from "./database.js";
import 'dotenv/config';
const hf_token = process.env.HF_TOKEN;
const database = new Database(hf_token);
await database.setupChromaLocal();
await database.createCollection('hello');
await database.save(randomUUID(), {}, 'this is a test.');
await database.querry('test');
