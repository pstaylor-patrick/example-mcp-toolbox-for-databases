import { pgTable, uuid, text, jsonb, timestamp } from "drizzle-orm/pg-core";

// Types for shared_in JSONB column
export type SharedIn = {
  platform: string;
  shared_at: string;
  timezone: string;
  message_text: string;
  shared_by: string;
  audience: string;
};

// Types for video JSONB column
export type PageCopyObserved = {
  headline: string;
};

export type Translation = {
  status: string;
  confidence: string;
  reason: string;
};

export type PrimaryCharacter = {
  role: string;
  wardrobe: string[];
  action: string;
};

export type VisualSummaryObserved = {
  style: string;
  setting: string;
  primary_character: PrimaryCharacter;
  props: string[];
  watermark: string;
};

export type SceneInferred = {
  scene_id: string;
  what_happens: string;
  evidence: string;
  timecodes: string | null;
};

export type Video = {
  provider: string;
  template_slug: string;
  url: string;
  page_copy_observed: PageCopyObserved;
  translation: Translation;
  visual_summary_observed: VisualSummaryObserved;
  scene_list_inferred: SceneInferred[];
  audio_lyrics_transcript: string | null;
};

// Types for notes JSONB column
export type Notes = {
  intended_use: string;
  to_make_this_full_fidelity: string[];
};

// Table definition
export const jibjabs = pgTable("jibjabs", {
  id: uuid("id").primaryKey().defaultRandom(),
  type: text("type").notNull().default("jibjab_video_share"),
  sharedIn: jsonb("shared_in").$type<SharedIn>().notNull(),
  video: jsonb("video").$type<Video>().notNull(),
  notes: jsonb("notes").$type<Notes>(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

// Infer types for insert and select
export type Jibjab = typeof jibjabs.$inferSelect;
export type NewJibjab = typeof jibjabs.$inferInsert;
