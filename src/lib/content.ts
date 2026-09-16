/**
 * The church's own Statement of Doctrine, carried over verbatim from
 * berkshirehillsbaptist.weebly.com/doctrine.html (dated October 24, 2010).
 * Wording is theirs; footnote markers left over from their page's citation
 * style have been tidied into the trailing scripture references.
 */

export interface FaithArticle {
  id: string;
  title: string;
  text: string;
  refs: string;
}

export const doctrineDate = "October 24, 2010";

export const faithArticles: FaithArticle[] = [
  {
    id: "the-holy-scriptures",
    title: "The Holy Scriptures",
    text: "We believe the Old and New Testaments of the Holy Bible in its original writings is the verbally and plenary inspired word and revelation of God; that it is literally true from Genesis 1:1 to Revelation 22:21; and, therefore, we look to it as our only authority in matters of faith, practice, and daily living. The King James Version of the Bible shall be the official and only translation used for preaching and teaching by the church.",
    refs: "II Timothy 3:16,17; II Peter 1:19-21",
  },
  {
    id: "the-godhead",
    title: "The Godhead",
    text: "We believe that God is the only eternal and uncreated Being, is infinite and perfect in all His attributes, and has revealed Himself as the Father, the Son, and the Holy Spirit, who are coequal and coordinate in their distinct but harmonious offices.",
    refs: "Isaiah 44:6; Psalm 90:2, 145:3; Matthew 5:48, 28:19; Deuteronomy 32:4; John 14:16-17, 10:30",
  },
  {
    id: "the-person-and-work-of-christ",
    title: "The Person and Work of Christ",
    text: "We believe in the absolute deity of the Son, the Lord Jesus Christ; that He is the Creator and Sustainer of all things; that He was conceived by the Holy Spirit and born of the Virgin Mary; that He lived sinless among men; that He died on the cross as a substitute for us, shedding His blood for the remission of our sins; that He was buried; that He arose physically from the grave; that He ascended into heaven and in His bodily presence sits at the right hand of the Father ever making intercession for us; and that He is coming again, visibly and at any moment.",
    refs: "John 1:1,14,15,18,29,30; Luke 3:22; Colossians 1:6,17; Isaiah 7:14; Matthew 1:18-25; Hebrews 4:14-15, 7:26-28; Matthew 26:28; I Corinthians 15:3-4; I Peter 2:24; Acts 1:9,11; I Thessalonians 4:16",
  },
  {
    id: "the-person-and-work-of-the-holy-spirit",
    title: "The Person and Work of the Holy Spirit",
    text: "We believe in the personality and deity of the Holy Spirit, and that among other ministries He convicts of sin, of righteousness, and of judgment; that He bears witness to the truth; that He is the Agent in the new birth; and that He seals, endues with power, guides, teaches, witnesses to, sanctifies, and helps the believer, indwelling every true child of God. We believe that God is sovereign in the bestowal of spiritual gifts to every believer, and that the sign gifts of the Holy Spirit — such as speaking in unknown tongues and the gift of healing — were temporary.",
    refs: "John 14:16-17,26, 16:7-14; Acts 5:3-4; Romans 8:9,14,16,26; I Corinthians 3:16, 12:4-11, 13:8; Ephesians 1:13, 4:7-12",
  },
  {
    id: "satan",
    title: "Satan",
    text: "We believe in the reality and personality of Satan; that he is the unholy god of this world; and that he is the author of all the powers of sin and darkness and is destined to an eternal judgment in the lake of fire.",
    refs: "Matthew 4:1-11; II Corinthians 4:3-4; Isaiah 14:12-15; John 8:44; Ephesians 2:2, 6:12-13; Revelation 12:9, 20:10",
  },
  {
    id: "man-and-salvation",
    title: "Man and Salvation",
    text: "We believe that man was specially created by God, that by original sin all have come under the condemnation of God, and that the only way of salvation is in individual confession of sin and by grace personally trusting in the redeeming work of Christ on the cross. We believe that all the redeemed, once saved, are kept by God's power and are thus secure in Christ forever, and that it is the privilege of believers to rejoice in the assurance of their salvation.",
    refs: "Genesis 1:26-27, 2:7; Romans 3:23, 5:12, 8:1,38-39; John 3:18, 6:37-40, 10:9-11,27-30; Acts 3:19, 16:30-31; Ephesians 1:7, 2:8-9",
  },
  {
    id: "separation",
    title: "Separation",
    text: "We believe that the believer in Christ is called to a holy walk in fellowship with the Lord and with His faithful followers, and in separation from the world of unbelief.",
    refs: "I Thessalonians 4:7; I Peter 1:13-16; I John 1:3, 2:6,15-17; II Corinthians 6:14-7:1",
  },
  {
    id: "the-church",
    title: "The Church",
    text: "We believe that the New Testament church is the entire body of believers in Christ, which when completed will be His bride; that its mission is to glorify God in evangelism by winning men to Christ, in edification by building them up in Christ, and in missions by sending them out for Christ; and that in its local aspect it consists of a regenerated and baptized membership and is independent and self-governing.",
    refs: "Matthew 16:16-18, 28:18-20; I Corinthians 12:12; Ephesians 1:22-23, 4:11-13; Acts 13:1-3",
  },
  {
    id: "church-ordinances",
    title: "Church Ordinances",
    text: "We believe that there are two church ordinances: baptism and the Lord's Supper; that the only true Biblical baptism is the immersion of the believer in water; and that the Lord's Supper, which is the commemoration of the Lord's death until He comes, is a witness of the believer's continued fellowship with Him and should be preceded by baptism and careful, self-examination.",
    refs: "Matthew 28:19; I Corinthians 11:23-26,29-30; Acts 8:36-39, 10:47; Romans 6:3-4",
  },
  {
    id: "the-eternal-state",
    title: "The Eternal State",
    text: "We believe in a final judgment when all will appear before the Lord, that the righteous will inherit an endless conscious bliss in heaven, and that the wicked will receive an endless conscious punishment in hell.",
    refs: "II Corinthians 5:10; Romans 14:12; Revelation 20:11-15, 21:8; Matthew 25:31-46; John 5:28-29",
  },
  {
    id: "creation",
    title: "Creation",
    text: "We believe that God created the universe in six literal, 24-hour periods. We reject evolution, the Gap Theory, the Day-Age Theory, and Theistic Evolution as unscriptural theories of origin.",
    refs: "Genesis 1-2; Exodus 20:11",
  },
  {
    id: "human-sexuality",
    title: "Human Sexuality",
    text: "We believe that God has commanded that no intimate sexual activity be engaged in outside of a marriage between a man and a woman, and that the only legitimate marriage is the joining of one man and one woman. We believe that men and women are spiritually equal in position before God but that God has ordained distinct and separate spiritual functions for men and women in the home and the church; the husband is to be the leader of the home, and men are to be the leaders — pastors and deacons — of the church.",
    refs: "Genesis 2:24; Romans 7:2; I Corinthians 7:10; Ephesians 5:22-23; Galatians 3:28; Colossians 3:18; I Timothy 2:8-15, 3:4-5,12",
  },
  {
    id: "abortion",
    title: "Abortion",
    text: "We believe that human life begins at conception and that the unborn child is a living human being. Abortion constitutes the unjustified, unexcused taking of unborn human life and is murder.",
    refs: "Job 3:16; Psalm 51:5, 139:14-16; Isaiah 44:24, 49:1,5; Jeremiah 1:5; Luke 1:44",
  },
  {
    id: "giving",
    title: "Giving",
    text: "We believe that every Christian, as a steward of that portion of God's wealth entrusted to him, is responsible to support his or her local church financially, giving tithes and offerings sacrificially and cheerfully to the support of the church, the relief of those in need, and the spread of the Gospel.",
    refs: "Genesis 14:20; Proverbs 3:9-10; Acts 4:34-37; I Corinthians 16:2; II Corinthians 9:6-7; Galatians 6:6",
  },
];

export const doctrineClosing =
  "This statement of faith does not exhaust the extent of our faith. The Bible itself is the sole and final source of all that we believe. We do believe, however, that the foregoing statement of faith accurately represents the teaching of the Bible.";

/**
 * From the church's own "Eternity" and "Knowing God" pages — their own
 * gospel presentation, not a generic tract.
 */
export const salvationIntro =
  "Maybe you have never been asked about your “eternal home.” Despite modern teachings, eternity with God is not a hit-or-miss proposition. We can know for sure that we'll spend eternity in heaven — the steps are simple, and they are laid out in God's Word, the Bible.";

export interface SalvationStep {
  id: string;
  heading: string;
  verses: { text: string; ref: string }[];
}

export const salvationSteps: SalvationStep[] = [
  {
    id: "born-a-sinner",
    heading: "Every person is born a sinner and needs to be saved",
    verses: [
      { text: "For all have sinned and come short of the glory of God.", ref: "Romans 3:23" },
      { text: "Ye must be born again.", ref: "John 3:7" },
    ],
  },
  {
    id: "cannot-save-yourself",
    heading: "You cannot save yourself",
    verses: [
      { text: "Not by works of righteousness which we have done …", ref: "Titus 3:5" },
      { text: "For the wages of sin is death …", ref: "Romans 6:23" },
    ],
  },
  {
    id: "jesus-only-way",
    heading: "Jesus is the only way of salvation from the penalty of sin",
    verses: [
      { text: "For Christ also hath suffered for sins, the just for the unjust, that He might bring us to God …", ref: "I Peter 3:18" },
      { text: "Neither is there salvation in any other …", ref: "Acts 4:12" },
    ],
  },
  {
    id: "personal-response",
    heading: "Every person must make a personal response — by faith",
    verses: [
      { text: "He that believeth on the Son hath everlasting life: and he that believeth not on the Son shall not see life …", ref: "John 3:36" },
      { text: "Believe on the Lord Jesus Christ, and thou shalt be saved.", ref: "Acts 16:31" },
    ],
  },
];
