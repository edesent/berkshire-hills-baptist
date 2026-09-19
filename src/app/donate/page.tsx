import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import { canonical, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support the ministry of Berkshire Hills Baptist Church in Lee, Massachusetts, and abroad.",
  alternates: { canonical: "/donate" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "DonateAction",
  "@id": canonical("/donate#page"),
  name: "Donate",
  recipient: { "@id": canonical("/#church") },
};

export default function DonatePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />
      <Navbar />
      <main id="main">
        <PageHero
          eyebrow="Donate"
          title="Donate now"
          breadcrumb={[{ href: "/donate", label: "Donate" }]}
        />

        <section className="section-pad paper">
          <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
            <p className="leading-relaxed text-text-body">
              Thank you for checking out our website; we hope you have
              enjoyed the online sermons and our blog, Growing in Grace. If
              you feel so led of the Lord, please consider making a monetary
              gift for the ministry of {site.name} by using the button below.
              We count it a privilege to be able to serve you and the web
              community with resources to help you grow and meet the Lord.
              Please know any gift you make will help in spreading the
              gospel of Jesus Christ here in {site.address.city},{" "}
              {site.address.region} and abroad. May the LORD richly bless
              you.
            </p>

            <form
              action="https://www.paypal.com/cgi-bin/webscr"
              method="post"
              target="_top"
              className="mt-10 flex justify-center"
            >
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input
                type="hidden"
                name="hosted_button_id"
                value="4Q2SCUST4LDNQ"
              />
              <input
                type="image"
                src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
                name="submit"
                alt="Donate with PayPal — the safer, easier way to pay online!"
                className="cursor-pointer"
              />
              <img
                alt=""
                src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
                width="1"
                height="1"
                className="hidden"
              />
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
