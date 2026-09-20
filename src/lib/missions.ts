/**
 * Missionary partners, as the church sent them on the intake form
 * (2026-09-19). This replaces the older list carried over from
 * berkshirehillsbaptist.weebly.com/missions1.html, which Deacon Peter
 * Markavage said was out of date.
 *
 * To change it, edit the array below — one object per missionary family,
 * four fields, no developer needed:
 *
 *   {
 *     name: "The Smith Family",
 *     role: "Church Planters",
 *     agency: "Baptist Mid-Missions",
 *     location: "Kenya",
 *     link: "https://example.org/optional-bio-page", // omit if none
 *   },
 */

export interface Missionary {
  name: string;
  role: string;
  agency: string;
  location: string;
  link?: string;
}

export const missionaries: Missionary[] = [
  {
    name: "Birch and Connie Champeon",
    role: "Bible translation",
    agency: "Unfolding Word Ministries",
    location: "International",
  },
  {
    name: "Chris Birkholz",
    role: "Missionary",
    agency: "Go Honduras",
    location: "Honduras",
  },
  {
    name: "John Asmah",
    role: "Missionary",
    agency: "Fellowship International Mission",
    location: "Ghana",
  },
  {
    name: "Chris Eckels",
    role: "Missionary",
    agency: "Fundamental Baptist World Mission",
    location: "Australia",
  },
  {
    name: "The Tarwaters",
    role: "Missionaries",
    agency: "Heartland Baptist Mission",
    location: "Philippines",
  },
  {
    name: "Matthew Frank",
    role: "Prison ministry",
    agency: "Rock of Ages Ministries",
    location: "United States",
  },
  {
    name: "Two missionary families",
    role: "Various ministries",
    agency: "Names withheld for their security",
    location: "Restricted access nations",
  },
];
