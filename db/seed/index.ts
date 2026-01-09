import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { jibjabs } from "../schema";
import { jibjabSeedData } from "./data/jibjabs";

async function seed() {
  console.log("Seeding database...");

  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
  });

  const db = drizzle(pool);

  try {
    // Clear existing data
    console.log("Clearing existing jibjabs...");
    await db.delete(jibjabs);

    // Insert seed data
    console.log("Inserting seed data...");
    const inserted = await db
      .insert(jibjabs)
      .values(jibjabSeedData)
      .returning();

    console.log(`Seeded ${inserted.length} jibjab(s):`);
    inserted.forEach((j) => {
      console.log(`  - ${j.id}: ${j.video.template_slug}`);
    });

    console.log("Seeding complete!");
  } catch (error) {
    console.error("Seeding failed:", error);
    process.exit(1);
  } finally {
    await pool.end();
  }
}

seed();
