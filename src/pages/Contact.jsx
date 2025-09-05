import React from "react";
import ContactForm from "../components/ContactForm";
import SeoSection from "../components/SeoSection";
import Seo from "../components/Seo";

export default function Contact() {
  return (
    <>
      <Seo
        title="About Us"
        description="Learn more about YourBrand, a digital marketing company in India."
      />
      <div className="fix-top">
        <ContactForm />
        <SeoSection />
      </div>
    </>
  );
}
