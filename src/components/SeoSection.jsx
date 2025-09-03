import React from "react";
import { Link } from "react-router-dom";

export default function SeoSection() {
  return (
    <div className="container-fluid wrapper p-md3">
      <div className="text-center p-md-5 pt-5 pb-5 text-white">
        <h2 className="mb-4" style={{ lineHeight: "1.5" }}>
          Ready to Take Your SEO to
          <br /> the Next Level
        </h2>
        <p>
          Our proven SEO strategies go beyond rankings — they increase your
          website’s visibility, bring in the right audience,
          <br /> and create a seamless user experience that converts visitors
          into customers.
        </p>
        <Link to="/contact" className="my-btn mt-3">
          Get Your Free Consultation
        </Link>
      </div>
    </div>
  );
}
