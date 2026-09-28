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
    "Berkshire Hills Baptist Church is an Independent Baptist church in Lee, Massachusetts, in the Berkshires — King James Bible preaching, hymn singing, and a warm welcome. Sunday School 10:00, Morning Worship 11:00, Sunday Afternoon Service 2:00, Wednesday Prayer & Bible Study 6:30.",
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
  /**
   * The church phone is temporarily out of service, so the site shows this
   * email instead. Encoded like the phone number and assembled in the browser.
   * To bring the phone back, revert the "phone out of service" changes.
   */
  emailHrefEncoded: "bWFpbHRvOnBhc3RvckBiZXJrc2hpcmVoaWxsc2JhcHRpc3QuY29t", // mailto:pastor@berkshirehillsbaptist.com
  emailDisplayEncoded: "cGFzdG9yQGJlcmtzaGlyZWhpbGxzYmFwdGlzdC5jb20=", // pastor@berkshirehillsbaptist.com
  contactPath: "/contact",
  geo: {
    // Geocoded from the church's own street address (190 Pleasant St, Lee, MA
    // 01238) via OpenStreetMap Nominatim.
    latitude: 42.2930446,
    longitude: -73.240733,
  },
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Berkshire+Hills+Baptist+Church%2C+190+Pleasant+St%2C+Lee%2C+MA+01238",
  mapEmbedUrl:
    "https://www.google.com/maps?q=Berkshire+Hills+Baptist+Church%2C+190+Pleasant+Street%2C+Lee%2C+MA+01238&output=embed",
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=Berkshire+Hills+Baptist+Church%2C+190+Pleasant+St%2C+Lee%2C+MA+01238",
  social: {
    facebook: "https://www.facebook.com/BerkshireHillsBaptist",
    /** Their current site, linked from the demo banner. */
    currentSite: "https://berkshirehillsbaptist.weebly.com",
    /**
     * The complete sermon archive. Deacon Peter Markavage uploads every
     * message here, so this list is longer than the handful featured on
     * /sermons. Given on the intake form as the "second sermon archive".
     */
    sermonArchive: "https://archive.org/details/@pjmarkavage",
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
  /** Optional one-off notice shown on the service card (e.g. a special Sunday). */
  note?: string;
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
      "We worship God together with hymns, praise and worship songs, and practical, applicable Bible preaching. Children's Church runs after the handshaking, up to age 14.",
  },
  {
    day: "Sunday",
    title: "Sunday Afternoon Service",
    time: "2:00 p.m.",
    opens: "14:00",
    closes: "15:15",
    blurb:
      "A good time of fellowship for the whole family — favorite hymns, praise songs and choruses, then an informal Bible study together.",
    note: "Sunday, Oct 4 only: in place of the 2:00 service, join us after worship for a light lunch, a hymn sing and testimonies.",
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
 * His name, photo and welcome letter come from the church's own site. The
 * biography below was sent by the church on the intake form (2026-09-19) —
 * nothing here is inferred.
 */
export const pastor = {
  name: "Doug Mann",
  displayName: "Pastor Dr. Doug Mann",
  title: "Pastor",
  photo: "/bhbc/pastor-doug.png",
  /** Year he began pastoring Berkshire Hills Baptist Church. */
  pastoringSince: 1997,
  bio: [
    "Dr. Mann has pastored Berkshire Hills Baptist Church since 1997. He graduated from Bethany Divinity School with his DMin in 2016.",
    "He has been married for over 50 years, and has four children and eight grandchildren.",
  ],
  /** The short facts shown beside his photo. */
  facts: [
    { label: "Pastoring here since", value: "1997" },
    { label: "Doctor of Ministry", value: "Bethany Divinity School, 2016" },
    { label: "Married", value: "Over 50 years" },
    { label: "Family", value: "Four children, eight grandchildren" },
  ],
  welcomeQuote:
    "What makes Berkshire Hills Baptist Church so special? Very simply, it is the people. BHBC is a church filled with caring, loving, and friendly people. Our church is here to serve you through regular weekly ministries as well as special activities throughout the year. It is here that relationships are made and where Christ is magnified.",
} as const;

/* ── Leadership ───────────────────────────────────────────────────────────── */
/**
 * The people shown in the leadership strip on the homepage.
 *
 * Only Pastor Mann is listed: the church's own site has never published a
 * staff page, and the intake form came back with no other names. To add
 * someone, copy the object below and fill in the four fields — a photo in
 * /public/bhbc is optional, and without one the card shows their initials
 * rather than a stand-in picture.
 *
 *   { name: "John Smith", role: "Deacon", detail: "Serving since 2005",
 *     photo: "/bhbc/john-smith.jpg", href: "/our-pastor" }
 */
export interface LeaderCard {
  name: string;
  role: string;
  detail: string;
  photo?: string;
  href?: string;
}

export const leadership: LeaderCard[] = [
  {
    name: "Dr. Doug Mann",
    role: "Pastor",
    detail:
      "Pastoring Berkshire Hills Baptist Church since 1997. DMin, Bethany Divinity School.",
    photo: "/bhbc/pastor-doug.png",
    href: "/our-pastor",
  },
];

/* ── Dated events ─────────────────────────────────────────────────────────── */
/**
 * The handful of dated things on the calendar, sent by the church on the
 * intake form. Each one disappears from the site by itself the day after
 * `endsOn`, so nothing here goes stale if it is not updated — add the next
 * one whenever the church sends it, and delete nothing.
 */
export interface ChurchEvent {
  /** Shown to visitors, e.g. "Sunday, October 4". */
  date: string;
  title: string;
  detail?: string;
  /** Last day it should appear, as YYYY-MM-DD. */
  endsOn: string;
}

export const churchEvents: ChurchEvent[] = [
  {
    date: "Sunday, October 4",
    title: "Anniversary Sunday",
    endsOn: "2026-10-04",
  },
  {
    date: "Sunday, October 25",
    title: "Annual Business Meeting",
    detail: "After the morning service, with a lite lunch.",
    endsOn: "2026-10-25",
  },
];

/** The events still ahead of us, in date order. Empty is a valid answer. */
export function upcomingEvents(now = new Date()): ChurchEvent[] {
  // Compare on the church's own calendar day, not UTC, so an event stays up
  // through the whole of its final day in Massachusetts.
  const today = new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/New_York",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(now);

  return churchEvents
    .filter((event) => event.endsOn >= today)
    .sort((a, b) => a.endsOn.localeCompare(b.endsOn));
}

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
    a: "Sunday School has a class for every age at 10:00, and Children's Church runs after the handshaking during the 11:00 service, up to age 14.",
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
