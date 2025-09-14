import React from "react";
import { Link } from "react-router-dom";

export default function SeoSection() {
  return (
    <div className="container-fluid wrapper p-md3">
      <div className="text-center p-md-5 pt-5 pb-5 text-white">
        <h2 className="mb-4" style={{ lineHeight: "1.5" }}>
          Take Your Social Media Marketing to
          <br /> the Next Level
        </h2>
        <p>
          Our proven Social Media Marketing strategies go beyond posts — they
          build brand visibility, engage the right audience,
          <br /> and create meaningful connections that convert followers into
          customers.
        </p>
        <Link to="/contact" className="my-btn mt-3">
          Get Your Free Consultation
        </Link>
      </div>
    </div>
  );
}
