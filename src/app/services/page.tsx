import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Services from "@/components/Services";
export const metadata: Metadata = {
  title: "Services",
  alternates: { canonical: "/services" },
};
export default function Page() {
  return (
    <>
      <Navbar />
      <main id="main">
        <PageHero
          eyebrow="Worship with us"
          title="A place for you, every week."
          lede="Join us for Sunday School at 10 a.m., morning worship at 11 a.m., Sunday afternoon service at 2 p.m., and Wednesday prayer and Bible study at 6:30 p.m."
        />
        <Services />
      </main>
      <Footer />
    </>
  );
}
