import type { NewJibjab } from "../../schema/jibjabs";

export const jibjabSeedData: Omit<
  NewJibjab,
  "id" | "createdAt" | "updatedAt"
>[] = [
  {
    type: "jibjab_video_share",
    sharedIn: {
      platform: "slack",
      shared_at: "2025-12-19T11:20:00-08:00",
      timezone: "America/Los_Angeles",
      message_text: `Hey PXT - wrapping the year with a huge thank you. From getting EMA into production to launching our bi-weekly Show & Tells, tightening our Jira + Confluence rhythm, and leaning into the AI Service Offering, you delivered real outcomes for customers while leveling up how we work together. I'm proud of the tenacity, collaboration, and care you brought to every sprint.

Looking ahead, 2026 is already shaping up strong: we're actively staffing two large projects (with more in the pipeline), and we'll roll out a few upgrades to how we build - an Accelerated Product Accelerator, new Tech Assessments, and a set of new product offerings (details coming early in the year). These are all about clarity, speed, and letting great teams do their best work.

I'm deeply grateful for each of you - please get some real rest over the holidays. We'll come back recharged and ready to move. Remember: When you fall in love with the process rather than the outcome, you don't have to wait to be happy.

Here is a little JibJab to get you all in the spirit!
https://www.jibjab.com/view/make/twinkle_all_the_way/ce3f08aa-c517-486f-b5f7-29bfb3bd48c1

Enjoy the break, and let's be Always Moving Forward (AMF).

Merry Christmas!
Steve`,
      shared_by: "Steve",
      audience: "PXT",
    },
    video: {
      provider: "JibJab",
      template_slug: "twinkle_all_the_way",
      url: "https://www.jibjab.com/view/make/twinkle_all_the_way/ce3f08aa-c517-486f-b5f7-29bfb3bd48c1",
      page_copy_observed: {
        headline: "Happy Holidays!",
      },
      translation: {
        status: "partial_from_screenshot_only",
        confidence: "low",
        reason:
          "I only have a single still frame (screenshot) of the video page, not the playable video/audio or a transcript.",
      },
      visual_summary_observed: {
        style:
          "holiday stop-motion / cutout animation style with a photo face composited onto a character",
        setting:
          "snowfall over rooftops with stylized evergreen trees in the background",
        primary_character: {
          role: "elf-like character",
          wardrobe: ["green knit hat with white pom-pom", "green outfit"],
          action:
            "posed mid-motion as if running/dancing/climbing on a rooftop",
        },
        props: [
          "satellite dish decorated with a string of Christmas lights/ornaments",
          "snow on roof edges",
        ],
        watermark: "jibjab (bottom-right of the video frame)",
      },
      scene_list_inferred: [
        {
          scene_id: "scene_01",
          what_happens:
            "An elf-like character with a composited photo face moves on a snowy rooftop near a decorated satellite dish while snow falls.",
          evidence: "observed in the provided screenshot",
          timecodes: null,
        },
      ],
      audio_lyrics_transcript: null,
    },
    notes: {
      intended_use:
        "Structured capture of a holiday JibJab share + context for archiving/searching",
      to_make_this_full_fidelity: [
        "Capture the video transcript/lyrics (or paste them here)",
        "Or provide a few more key frames / a rough play-by-play so I can build a complete scene-by-scene JSON with timecodes",
      ],
    },
  },
];
