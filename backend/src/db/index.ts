import { DB_CONFIG } from "../constants";
import { Pool } from "pg";

export const pool = new Pool(DB_CONFIG);

export const query = (
    text: string, 
    params?: any[]) => pool.query(text, params);