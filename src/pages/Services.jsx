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
        title="About Us"
        description="Learn more about YourBrand, a digital marketing company in India."
      />
      <div className="container p-md-3 mb-5 fix-top">
        <div className="row p-md-5 pt-5">
          <h1>
            Elevate. Engage. Excel.
            <br />
            <span style={{ color: "#387ed1" }}> With Brand Media</span>
          </h1>
          <p>Your trusted partner in digital growth</p>
          <p className="mb-5">
            At Brand Media, we know that a strong online presence isn’t
            optional—it’s essential. Our team helps your business shine with a
            complete suite of digital solutions. From boosting visibility
            through smart SEO, crafting impactful ad campaigns, and building
            meaningful connections on social media, to shaping a powerful brand
            identity with creative design, engaging visuals, and compelling
            video content—everything we do is focused on driving your growth. We
            combine creativity with strategy so you can capture attention,
            convert leads, and grow sustainably, all while keeping costs
            effective.
          </p>
        </div>
        <div className="row">
          <div className="col-xl-4 col-md-6">
            <Card
              title="Search Engine Optimization (SEO)"
              para="Boost your digital presence and attract the right audience with our smart SEO strategies. We fine-tune your website to secure higher rankings and long-term growth."
              image={`url("/growtika-183Yxo3vsGY-unsplash.jpg")`}
            />
          </div>
          <div className="col-xl-4 col-md-6">
            {" "}
            <Card
              title="Social Engine Marketing"
              para="Strengthen your brand identity and connect with your audience through impactful social media. Our tailored campaigns spark engagement and grow your community."
              image={`url("/social.jpg")`}
            />
          </div>
          <div className="col-xl-4 col-md-6">
            <Card
              title="Website Design and Development"
              para="Create a powerful first impression with a sleek, user-friendly website. Our expert design and development services ensure a seamless experience that drives results."
              image={`url("/carriza-maiquez-RTdvy9izXvw-unsplash.jpg")`}
            />
          </div>
          <div className="col-xl-4 col-md-6">
            {" "}
            <Card
              title="Social Media Optimization"
              para="We create impactful content that informs, entertains, and inspires—keeping your audience engaged while strengthening brand loyalty."
              image={`url("/pexels-mikael-blomkvist-6476808.jpg")`}
            />
          </div>
          <div className="col-xl-4 col-md-6">
            <Card
              title="Paid Advertising (PPC)"
              para="Maximize your reach with targeted paid ads on Google, Facebook, and beyond. We design data-driven campaigns that deliver clicks, leads, and conversions efficiently."
              image={`url("/gabby-hsu-zTi-XPU_70U-unsplash.png")`}
            />
          </div>
          <div className="col-xl-4 col-md-6">
            <Card
              title="Performance Tracking"
              para="We monitor and analyze your digital campaigns with advanced analytics, giving you clear insights to optimize performance and maximize ROI."
              image={`url("/pexels-goumbik-590016.jpg")`}
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
