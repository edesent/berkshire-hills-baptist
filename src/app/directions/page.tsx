import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import FindUs from "@/components/FindUs";
export const metadata: Metadata = {
  title: "Directions",
  alternates: { canonical: "/directions" },
};
export default function Page() {
  return (
    <>
      <Navbar />
      <main id="main">
        <PageHero
          eyebrow="Come visit"
          title="Find us in Lee, Massachusetts."
          lede="190 Pleasant Street, Route 102, Lee, MA 01238"
        />
        <FindUs />
      </main>
      <Footer />
    </>
  );
}
