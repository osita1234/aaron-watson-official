import pg from "pg";
const { Pool } = pg;
const globalForDb = globalThis;
const pool = globalForDb.__aaronWatsonPool || new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.DATABASE_URL?.includes("localhost") ? false : { rejectUnauthorized: false }
});
if (process.env.NODE_ENV !== "production") globalForDb.__aaronWatsonPool = pool;
export default pool;
