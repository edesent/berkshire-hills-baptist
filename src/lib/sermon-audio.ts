/** Latest Sunday messages, verified against the church website on 2026-09-19. */
export interface SermonAudio {
  title: string;
  date: string;
  description: string;
  url: string;
}
export const sermonAudioLibrary: SermonAudio[] = [
  {
    title: "The Church and You",
    date: "September 13, 2026",
    description:
      "Is the church really a building - or are we getting it completely wrong? In Romans 16, we discover that the church is a local family of believers united in Christ, each called to serve, encourage, pray, and make a positive difference. Through examples such as Phoebe, Priscilla and Aquila, Mary, and others, we see that every person has a meaningful role, whether visible or behind the scenes. What part can we play in serving Christ and strengthening one another? Find out in today’s message! Transcription available.",
    url: "https://archive.org/download/09.13.2026-the-church-and-you/09.13.2026%20-%20The%20Church%20and%20You.mp3",
  },
  {
    title: "The God We Worship",
    date: "September 6, 2026",
    description:
      "What if the God we worship expects us to reflect His character in a divided and troubled world? Romans 15 reminds us that God is patient with us. He comforts us through His Word. He gives us hope when circumstances seem hopeless. He fills us with joy and peace through the Holy Spirit. As believers, we are called to show patience and stand together in faith. When we understand who God is, we can better understand how He wants us to live. Find out in today’s message. Transcription available.",
    url: "https://archive.org/download/09.06.2026-the-god-we-worship/09.06.2026%20-%20The%20God%20We%20Worship.mp3",
  },
  {
    title: "Joseph's Story: God Heals the Broken",
    date: "August 30, 2026",
    description:
      "Can God truly bring healing from family wounds, betrayal, and guilt? Through Joseph’s story, we see that God meets us in brokenness, preserves us through painful seasons, and can bring good from what others meant for evil. These messages explore the difficult but freeing work of forgiveness: releasing bitterness, recognizing repentance, and trusting God with the parts of our story we cannot undo. Join us as we find hope for our families, our past, and our future—listen to today’s message. Transcriptions available.",
    url: "https://archive.org/download/part-2-josephs-story/08.302026%20-%20Part%201%20-%20Joseph%27s%20Story.mp3",
  },
];
