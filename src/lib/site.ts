/**
 * Every fact on this site comes from berkshirehillsbaptist.weebly.com (the
 * church's own site, still live at BerkshireHillsBaptist.com), their Facebook
 * page (facebook.com/BerkshireHillsBaptist), or a public address lookup.
 * Nothing is invented. No nonprofit filing details are published here because
 * none were found on either source — see the Contact page instead of a
 * fabricated Transparency page.
 */

export const siteUrl = "https://berkshirehillsbaptist.elijahdesent.com";

export const site = {
  name: "Berkshire Hills Baptist Church",
  shortName: "Berkshire Hills Baptist",
  tagline: "A church filled with caring, loving, friendly people.",
  /** From their own "Our Church Is..." page. */
  descriptor: "An Independent, King James Bible-believing Baptist church",
  description:
    "Berkshire Hills Baptist Church is an Independent Baptist church in Lee, Massachusetts, in the Berkshires — King James Bible preaching, hymn singing, and a warm welcome. Sunday School 10:00, Morning Worship 11:00, Sunday Evening Praise 2:00, Wednesday Prayer & Bible Study 6:30.",
  address: {
    street: "190 Pleasant Street, Route 102",
    city: "Lee",
    region: "MA",
    regionName: "Massachusetts",
    postalCode: "01238",
    country: "US",
    county: "Berkshire County",
  },
  /** Reference numbers are assembled client-side, never printed into the HTML. */
  phoneEncoded: "KzE0MTMyNDMwODM3", // +14132430837
  phoneDisplayEncoded: "KDQxMykgMjQzLTA4Mzc=", // (413) 243-0837
  contactPath: "/contact",
  geo: {
    // Geocoded from the church's own street address (190 Pleasant St, Lee, MA
    // 01238) via OpenStreetMap Nominatim.
    latitude: 42.2930446,
    longitude: -73.240733,
  },
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Berkshire+Hills+Baptist+Church%2C+190+Pleasant+St%2C+Lee%2C+MA+01238",
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=Berkshire+Hills+Baptist+Church%2C+190+Pleasant+St%2C+Lee%2C+MA+01238",
  social: {
    facebook: "https://www.facebook.com/BerkshireHillsBaptist",
    /** Their current site, linked from the demo banner. */
    currentSite: "https://berkshirehillsbaptist.weebly.com",
  },
} as const;

export function canonical(path = "/") {
  return new URL(path, siteUrl).toString();
}

/* ── Services ─────────────────────────────────────────────────────────────── */

export interface ServiceTime {
  day: "Sunday" | "Wednesday";
  title: string;
  time: string;
  opens: string;
  closes: string;
  blurb: string;
}

export const serviceTimes: ServiceTime[] = [
  {
    day: "Sunday",
    title: "Sunday School",
    time: "10:00 a.m.",
    opens: "10:00",
    closes: "10:50",
    blurb:
      "A class for every age level. Children's classes use crafts and Bible stories; teen and adult classes study Bible topics in depth in an informal discussion setting.",
  },
  {
    day: "Sunday",
    title: "Morning Worship",
    time: "11:00 a.m.",
    opens: "11:00",
    closes: "12:15",
    blurb:
      "We worship God together with hymns, praise and worship songs, and practical, applicable Bible preaching. Children's Church runs through Grade 6.",
  },
  {
    day: "Sunday",
    title: "Sunday Evening Praise",
    time: "2:00 p.m.",
    opens: "14:00",
    closes: "15:15",
    blurb:
      "A good time of fellowship for the whole family — favorite hymns, praise songs and choruses, then an informal Bible study together.",
  },
  {
    day: "Wednesday",
    title: "Prayer & Bible Study",
    time: "6:30 p.m.",
    opens: "18:30",
    closes: "19:45",
    blurb:
      "We share our needs, present them to God in prayer, and study the Bible together, with time for questions and answers.",
  },
];

/* ── What their own "About" page says makes them who they are ───────────── */

export const distinctives = [
  {
    word: "Bible Believing",
    text: "We believe that the Bible is the preserved Word of God and is the only authority for our standard of conduct and the rule for life and service.",
  },
  {
    word: "Independent",
    text: "We are self-governing and free of any denominational control.",
  },
  {
    word: "Missionary",
    text: "We believe that the Church has been commissioned to share the Gospel of Jesus Christ locally and abroad, through personal evangelistic efforts and the support of missionaries both here in the United States and around the world.",
  },
  {
    word: "Warm and Friendly",
    text: "This is the way the majority of first-time visitors describe our church — a real expression of the love we have for each other, and for those who join us each week.",
  },
  {
    word: "Baptist",
    text: "We follow the basic Baptist distinctives: salvation by faith only; baptism by immersion after salvation; two ordained offices only, pastor and deacon; and the Bible as our authority for faith and practice.",
  },
] as const;

export const missionStatement =
  "Our purpose is to be a Great Church by making the Great Commission and the Great Commandment a priority of our church and daily life — going, teaching and baptizing, and sharing the love of Jesus Christ with those we meet locally, through supporting missionaries around the world.";

export const missionRef = "Matthew 28:19-20";

/* ── Pastor ───────────────────────────────────────────────────────────────── */
/**
 * Only what the church's own site confirms: his name (given as "Pastor Dr.
 * Doug Mann" in their sermon archive), a photo, and his own welcome letter to
 * visitors. No ordination date, education or family details were published on
 * either the current site or Facebook, so none are invented here.
 */
export const pastor = {
  name: "Doug Mann",
  displayName: "Pastor Dr. Doug Mann",
  title: "Pastor",
  photo: "/bhbc/pastor-doug.jpg",
  welcomeQuote:
    "What makes Berkshire Hills Baptist Church so special? Very simply, it is the people. BHBC is a church filled with caring, loving, and friendly people. Our church is here to serve you through regular weekly ministries as well as special activities throughout the year. It is here that relationships are made and where Christ is magnified.",
} as const;

/** A few of Pastor Mann's recent messages, from the church's own Wednesday-night
 * Bible study archive. Real titles, real dates, real audio links. */
export const recentMessages = [
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
  {
    title: "Joshua 20–21 — Cities of Refuge",
    date: "February 11, 2026",
    description:
      "How God wove justice and mercy into Israel's life through the cities of refuge and the cities given to the Levites.",
    url: "https://archive.org/download/02.11.2026-joshua_20-21-transcribe/02.11.2026-joshua_20-21-transcribe.pdf",
  },
  {
    title: "A Proper Perspective (Psalm 8)",
    date: "October 18, 2023",
    description:
      "On the name God has given Jesus, and what it means to confess Him as Lord.",
    url: "https://berkshirehillsbaptist.weebly.com/grow.html",
  },
] as const;

/* ── What a first visit is actually like, from their own "What to Expect" page ─ */

export const visitFacts = [
  {
    q: "What should I wear?",
    a: "There is no specific dress code. The pastor wears a suit; some men wear a tie; some ladies wear dresses; but most dress in modest, casual attire.",
  },
  {
    q: "What will happen when I arrive?",
    a: "Please be seated, and be prepared for several of our friendly people to introduce themselves and welcome you. There is also a time of greeting during the service.",
  },
  {
    q: "What Bible do you use?",
    a: "We encourage everyone to follow along in their Bibles, so for consistency we use the King James Version. Bring your own, but if you forget it, we have one in the pews for you.",
  },
  {
    q: "What is the music like?",
    a: "We appreciate the old-fashioned hymns as well as some of the newer songs, choosing musical selections that are conservative in presentation and consistent with the day's message.",
  },
  {
    q: "What about my children?",
    a: "Sunday School has a class for every age at 10:00, and Children's Church runs during the 11:00 service through Grade 6.",
  },
  {
    q: "What is the preaching like?",
    a: "Our Sunday morning sermon is usually verse-by-verse or topical preaching from the Word of God, and our Wednesday evening Bible study works through a book of the Bible chapter by chapter.",
  },
] as const;

/* ── SEO ──────────────────────────────────────────────────────────────────── */

export const localKeywords = [
  "Berkshire Hills Baptist Church",
  "Baptist church Lee Massachusetts",
  "Independent Baptist church Berkshire County",
  "King James Bible church Massachusetts",
  "church near Lee MA",
  "old fashioned Baptist church Berkshires",
  "Sunday School Lee MA",
  "KJV preaching church near me",
];
