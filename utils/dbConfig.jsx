import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
const sql = neon(
  "postgresql://neondb_owner:v3k4jRKzsOWb@ep-yellow-snow-a56va49r.us-east-2.aws.neon.tech/finan-smart?sslmode=require"
);
export const db = drizzle(sql, { schema });
