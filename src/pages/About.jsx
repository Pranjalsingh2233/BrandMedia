import React from "react";
import SeoSection from "../components/SeoSection";
import ReviewCard from "../components/ReviewCard";
import Team from "../components/Team";
import Skills from "../components/Skills";
import Seo from "../components/Seo";

export default function About() {
  return (
    <>
      <Seo
        title="About BrandMedia"
        description="We are a leading digital marketing company in Prayagraj, helping businesses across Uttar Pradesh grow online with SEO, PPC, and website design."
      />
      <div className="container p-md-3 pt-5 mt-5 mt-md-0 fix-top">
        <div className="row p-md-5  justify-content-between w-100 align-items-center">
          <div className="col-lg-6 mt-lg-5">
            <h1>
              We help brands grow with <br />
              <span style={{ color: "#387ed1" }}>
                data-driven digital marketing.
              </span>
            </h1>
            <p className="text-muted mt-5">
              Brand Media is a multidisciplinary digital agency dedicated to
              creating smart and impactful solutions for businesses. From
              website design and development to mobile applications, software
              solutions, and digital marketing—we help brands establish a strong
              digital presence. At Brand Media, we focus on building lasting
              client relationships and crafting strategies that deliver
              measurable results. Our goal is simple: to bring more visibility,
              growth, and business opportunities to our clients.
            </p>
          </div>
          <div
            className="col-lg-6 text-center text-lg-start p-5"
            style={{ aspectRatio: "16 / 9" }}
          >
            <img
              src="/hero.png"
              alt="team"
              className="img-fluid float"
              width={600}
              height={300}
              fetchpriority="high"
            ></img>
          </div>
        </div>
      </div>
      <Skills />
      <ReviewCard />
      <Team />
      <SeoSection />
    </>
  );
}
