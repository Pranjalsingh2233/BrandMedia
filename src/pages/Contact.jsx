import React from "react";
import ContactForm from "../components/ContactForm";
import SeoSection from "../components/SeoSection";
import Seo from "../components/Seo";

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact Us"
        description="Get in touch with BrandMedia for SEO, PPC, social media marketing, and website design services. Contact us today to grow your business online."
      />

      <div className="fix-top">
        <ContactForm />
        <SeoSection />
      </div>
    </>
  );
}
