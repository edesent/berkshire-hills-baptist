import EternalLifeCta from "@/components/EternalLifeCta";
import FindUs from "@/components/FindUs";
import Footer from "@/components/Footer";
import GiveCta from "@/components/GiveCta";
import Hero from "@/components/Hero";
import Leadership from "@/components/Leadership";
import { LatestMessages } from "@/components/MessagesLibrary";
import Mission from "@/components/Mission";
import MissionariesHome from "@/components/MissionariesHome";
import PrayerRequest from "@/components/PrayerRequest";
import QuickFacts from "@/components/QuickFacts";
import Navbar from "@/components/Navbar";
import ScriptureBanner from "@/components/ScriptureBanner";
import Services from "@/components/Services";
import StillThatChurch from "@/components/StillThatChurch";
import WelcomePastor from "@/components/WelcomePastor";
import { canonical, pastor, serviceTimes, site } from "@/lib/site";

const churchSchema = {
  "@context": "https://schema.org",
  "@type": "Church",
  "@id": canonical("/#church"),
  name: site.name,
  alternateName: [site.shortName],
  url: canonical("/"),
  slogan: site.tagline,
  description: site.description,
  image: canonical("/bhbc/church-exterior.jpg"),
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: site.geo.latitude,
    longitude: site.geo.longitude,
  },
  areaServed: [
    { "@type": "City", name: site.address.city },
    { "@type": "AdministrativeArea", name: site.address.county },
    { "@type": "State", name: site.address.regionName },
  ],
  hasMap: site.mapUrl,
  sameAs: [site.social.facebook],
  employee: {
    "@type": "Person",
    name: pastor.name,
    jobTitle: pastor.title,
  },
  openingHoursSpecification: serviceTimes.map((service) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: service.day,
    opens: service.opens,
    closes: service.closes,
    name: service.title,
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": canonical("/#faq"),
  mainEntity: [
    {
      "@type": "Question",
      name: "Where is Berkshire Hills Baptist Church located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `${site.name} is at ${site.address.street}, ${site.address.city}, ${site.address.region} ${site.address.postalCode}, in ${site.address.county}.`,
      },
    },
    {
      "@type": "Question",
      name: "What time are services at Berkshire Hills Baptist Church?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sunday School is at 10:00 a.m., Morning Worship at 11:00 a.m., and Sunday Afternoon Service at 2:00 p.m. Prayer and Bible Study is Wednesday at 6:30 p.m.",
      },
    },
    {
      "@type": "Question",
      name: "What kind of church is Berkshire Hills Baptist Church?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It is an Independent Baptist church that preaches from the King James Bible. It is not affiliated with a denominational headquarters.",
      },
    },
    {
      "@type": "Question",
      name: "What should I wear to Berkshire Hills Baptist Church?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "There is no dress code. You will see suits and ties as well as slacks and a shirt. Come as you are able.",
      },
    },
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": canonical("/#website"),
  name: site.name,
  url: canonical("/"),
  description: site.description,
  inLanguage: "en-US",
  publisher: { "@id": canonical("/#church") },
  about: { "@id": canonical("/#church") },
};

const structuredData = [churchSchema, faqSchema, websiteSchema];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <Navbar />
      <main id="main">
        <Hero />
        <QuickFacts />
        <WelcomePastor />
        <Services />
        <StillThatChurch />
        <Mission />
        <Leadership />
        <ScriptureBanner />
        <MissionariesHome />
        <GiveCta />
        <PrayerRequest />
        <LatestMessages />
        <EternalLifeCta />
        <FindUs />
      </main>
      <Footer />
    </>
  );
}
