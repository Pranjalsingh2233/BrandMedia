import React from "react";
import Skills from "../components/Skills";
import ReviewCard from "../components/ReviewCard";
import SeoSection from "../components/SeoSection";
import Card from "../components/Card";
import Seo from "../components/Seo";

export default function Services() {
  return (
    <>
      <Seo
        title="Digital Marketing & Web Design Services in Uttar Pradesh"
        description="Explore YourBrand’s services including SEO, PPC, social media marketing, and website design. Grow your business online with our expert solutions."
      />
      <div className="container p-md-3 mb-5 fix-top">
        <div className="row p-md-5 pt-5 mb-5 mb-md-0 align-items-center">
          <div className="col-lg-6">
            <h1>
              Elevate. Engage. Excel.
              <br />
              <span style={{ color: "#387ed1" }}> With Brand Media</span>
            </h1>
            <p>Your trusted partner in digital growth</p>

            <p>
              At Brand Media, we know that a strong online presence isn’t
              optional—it’s essential. Our team helps your business shine with a
              complete suite of digital solutions. From boosting visibility
              through smart SEO, crafting impactful ad campaigns, and building
              meaningful connections on social media, to shaping a powerful
              brand identity with creative design, engaging visuals, and
              compelling video content—everything we do is focused on driving
              your growth. We combine creativity with strategy so you can
              capture attention, convert leads, and grow sustainably, all while
              keeping costs effective.
            </p>
          </div>
          <div className="col-lg-6 text-center text-lg-end">
            <video autoPlay muted loop playsInline className="video">
              <source src="/mike.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-4 col-md-6">
            <Card
              title="Search Engine Optimization (SEO)"
              para="Boost your digital presence and attract the right audience with our smart SEO strategies. We fine-tune your website to secure higher rankings and long-term growth."
              icon="fa-solid fa-bullseye"
            />
          </div>
          <div className="col-xl-4 col-md-6">
            {" "}
            <Card
              title="Social Media Marketing"
              para="We create and manage high-performing Facebook and Instagram ad campaigns that build brand awareness, generate quality leads, and boost sales conversions for your business."
              icon="fa-solid fa-bullhorn"
            />
          </div>
          <div className="col-xl-4 col-md-6">
            <Card
              title="Website Design and Development"
              para="Create a strong online presence with a modern, user-friendly website. Our expert web design and development services help your business stand out and deliver a seamless experience to your customers
."
              icon="fa-solid fa-code"
            />
          </div>
          <div className="col-xl-4 col-md-6">
            {" "}
            <Card
              title="Local SEO"
              para="Boost your local visibility with SEO that puts you at the top of Google search and Maps. Our strategies optimize your presence, attract more customers, and grow your business locally."
              icon="fa-solid fa-map-location-dot"
            />
          </div>
          <div className="col-xl-4 col-md-6">
            <Card
              title="Google Advertising (PPC)"
              para="Reach your audience with targeted Google Ads that drive traffic, leads, and ROI.
From keywords to tracking, we manage campaigns that deliver measurable results."
              icon="fa-solid fa-money-bill-trend-up"
            />
          </div>
          <div className="col-xl-4 col-md-6">
            <Card
              title="Video Editing"
              para="Bring your ideas to life with expert video editing.
We design engaging, brand-focused visuals that connect.
From ads to social media and corporate films,
our edits boost quality, impact, and reach."
              icon="fa-solid fa-video"
            />
          </div>
        </div>
      </div>
      <Skills />
      <ReviewCard />
      <SeoSection />
    </>
  );
}
