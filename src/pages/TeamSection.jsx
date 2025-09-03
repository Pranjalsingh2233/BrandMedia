import React from "react";
import Team from "../components/Team";
import SeoSection from "../components/SeoSection";

export default function TeamSection() {
  return (
    <>
      <div className="container p-md-3 mb-5 mb-md-0">
        <div className="row p-md-5 pt-5">
          <div className="col-lg-8">
            <h1 className="mb-5">
              Our <span style={{ color: "#387ed1" }}>Pillars</span>
            </h1>
            <p>
              At Brand Media, our strength lies in the people who make ideas
              come alive. We proudly call them our “Growth Catalysts” — a team
              of innovators, strategists, designers, and storytellers who drive
              every campaign with passion and precision.
            </p>

            <p>
              Armed with expertise and creativity, they’re not just employees,
              but the force behind every success we deliver. From our founders
              and core leaders to specialists in SEO, paid ads, content, design,
              and development — each one adds a unique spark to our mission.
            </p>

            <p>
              Every project is nurtured through teamwork, open communication,
              and a culture of transparency. Whether it’s brainstorming fresh
              strategies, refining every detail, or delivering results that
              exceed expectations, our team ensures that growth isn’t just a
              promise — it’s a practice.
            </p>
          </div>
          <div className="col-lg-4">
            <img
              src="/raamin-ka-uR51HXLO7G0-unsplash.jpg"
              alt="owner"
              className="img-fluid social"
            ></img>
            <div className="text-center fs-3 mt-2">Afridi Khan</div>
          </div>
        </div>
      </div>
      <Team />
      <SeoSection />
    </>
  );
}
