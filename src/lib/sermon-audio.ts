/**
 * THE SERMON AUDIO LIBRARY — how to add a new message
 * ────────────────────────────────────────────────────
 * This array is the entire audio library. To add a new sermon, copy one
 * of the blocks below, fill in the four fields, and save:
 *
 *   {
 *     title: "Joshua 24",
 *     date: "March 4, 2026",
 *     description: "One short sentence about what the message covers.",
 *     url: "https://archive.org/download/.../joshua-24.mp3",
 *   },
 *
 * `url` must point straight at a playable audio file (an .mp3 link, for
 * example — the same kind of link the church already uses on archive.org).
 * No developer is needed to add an entry; just edit this file and save.
 *
 * Newest sermon goes first — the homepage and this page both show them
 * in the order they appear here.
 */

export interface SermonAudio {
  title: string;
  date: string;
  description: string;
  url: string;
}

export const sermonAudioLibrary: SermonAudio[] = [
  {
    title: "Joshua 23",
    date: "February 25, 2026",
    description:
      "An aging Joshua reminds Israel how faithfully God has fought for them and kept every promise.",
    url: "https://archive.org/download/02.25.2026-joshua-23/02.25.2026%20-%20Joshua%2023.mp3",
  },
  {
    title: "Joshua 22",
    date: "February 18, 2026",
    description:
      "The two-and-a-half tribes explain why they built an altar by the Jordan — a witness, not a rival place of sacrifice.",
    url: "https://archive.org/download/02.18.26-joshua-22/02.18.26%20Joshua%2022.mp3",
  },
];
