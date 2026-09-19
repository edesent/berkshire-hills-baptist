/**
 * Missionary partners, captured from the church's own "Missionary Partners"
 * page (berkshirehillsbaptist.weebly.com/missions1.html) on 2026-09-19.
 *
 * Deacon Peter Markavage said this list is out of date and he will send an
 * updated one. When he does, replace the array below the same way — one
 * object per missionary family, four fields, no developer needed:
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
    name: "Chris Eckles and family",
    role: "Church Planter",
    agency: "Fundamental Baptist World Wide Mission",
    location: "Australia",
    link: "http://church.fairhavenbaptist.org/missions/eckels-in-australia",
  },
  {
    name: "John Asmah and family",
    role: "Youth Ministries",
    agency: "Fellowship International Mission",
    location: "Ghana",
  },
  {
    name: "Chris Birkholz and family",
    role: "Missionaries",
    agency: "Baptist Evangelistic Missionary Association",
    location: "Honduras",
    link: "http://thebirkholzfamily.com/",
  },
  {
    name: "Brad and Beth Howe",
    role: "Church Planters",
    agency: "ABWE — Association of Baptists for World Evangelism",
    location: "Italy",
  },
  {
    name: "Birch and Connie Champeon",
    role: "Bibles International",
    agency: "Baptist Mid-Missions",
    location: "International",
    link: "https://www.bmm.org/family/champeon-birch-and-connie/",
  },
  {
    name: "Mike Carr and family",
    role: "Church Building Ministry",
    agency: "Continental Baptist Missions",
    location: "United States",
  },
  {
    name: "Gerard Dumoulin and family",
    role: "Church Planter — Monsey, NY",
    agency: "International Board of Jewish Missions, Inc.",
    location: "United States",
  },
  {
    name: "Brett Reitenbach and family",
    role: "New England Baptist Fellowship",
    agency: "Greenfield Baptist Church",
    location: "New England",
    link: "http://www.greenfieldbaptistchurch.net/index.html",
  },
  {
    name: "Two missionary families",
    role: "Various ministries",
    agency: "Restricted Access Nations",
    location: "Restricted access — names withheld for security",
  },
];
