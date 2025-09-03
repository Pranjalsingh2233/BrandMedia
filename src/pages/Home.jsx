import React from "react";
import { Link } from "react-router-dom";
import SeoSection from "../components/SeoSection";
import ContactForm from "../components/ContactForm";
import ReviewCard from "../components/ReviewCard";

export default function Home() {
  return (
    <>
      <div className="container-fluid wrapper pt-5 p-lg-3">
        <div className="row p-lg-5 flex-wrap-reverse">
          <div className="col-lg-6 p-xl-5 text-white pb-5 text-center text-lg-start">
            <h1>
              Partner with the Leading <br /> Branding & Digital Marketing
              <br />
              Company in Uttar Pradesh
            </h1>
            <p className="mb-4">
              Website Development, Paid Ads & Digital Marketing that Deliver
              Results.
            </p>
            <Link to="/contact" className="my-btn me-0 me-lg-5">
              Start Ranking Now
            </Link>
          </div>
          <div className="col-lg-6">
            <img
              src="/antar-ray-uVo-oNHyTTc-unsplash.png"
              alt="social"
              className="img-fluid mb-5"
            ></img>
          </div>
        </div>
      </div>
      <div className="container p-md-5 mt-5 mb-5">
        <h2 className="mb-3 text-center">Your Growth Partner</h2>
        <div className="row align-items-center">
          <div className="col-lg-6 p-md-5 text-muted">
            <img
              className="social img-fluid"
              src="/luky-triohandoko-eecTcKqXpz8-unsplash.png"
              alt="work"
            />
          </div>
          <div className="col-lg-6 p-md-3 text-mute">
            <p>
              Brand Media Pvt. Ltd. is a full-service digital and IT solutions
              company dedicated to helping businesses thrive in the online
              space. From modern website design and seamless development to
              performance-driven Google Ads, SEO, and digital marketing
              campaigns, we deliver end-to-end solutions tailored to your goals.
            </p>
            <p>
              Our approach goes beyond just providing services — we focus on
              building long-term partnerships with our clients. Every strategy
              we create is backed by data, creativity, and innovation to ensure
              measurable business growth. With a team of specialists in
              technology, marketing, and design, Brand Media brings together
              expertise that empowers your brand to stand out, attract the right
              audience, and achieve sustainable success.
            </p>
            <div className="text-center text-lg-start">
              <Link to="/about">
                Learn More{" "}
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container p-md-3">
        <div className="row text-center p-md-3">
          <h2 className="mb-5 pb-3">What We Offer</h2>
          <br />
          <div className="col-lg-6 col-xl-4">
            <div
              className="custom-card"
              style={{
                backgroundImage: `url("/pexels-mikael-blomkvist-6476808.jpg")`,
              }}
            >
              <div className="card-content">
                <h5 className="">SEO and local Ads</h5>
                <p className="">
                  We understand the critical role that a well-designed and
                  user-friendly website plays in shaping your online presence
                  driving.
                </p>
              </div>
              <Link
                to="/services"
                className="btn card-btn"
                style={{ backgroundColor: "transparent" }}
              >
                More...
              </Link>
            </div>
          </div>
          <div className="col-lg-6 col-xl-4">
            <div
              className="custom-card"
              style={{
                backgroundImage: `url("/carriza-maiquez-RTdvy9izXvw-unsplash.jpg")`,
              }}
            >
              <div className="card-content">
                <h5 className="">Website Development</h5>
                <p className="">
                  We understand the critical role that a well-designed and
                  user-friendly website plays in shaping your online presence
                  driving.
                </p>
              </div>
              <Link
                to="/services"
                className="btn card-btn"
                style={{ backgroundColor: "transparent" }}
              >
                More...
              </Link>
            </div>
          </div>
          <div className="col-lg-6 col-xl-4">
            <div
              className="custom-card"
              style={{
                backgroundImage: `url("/myriam-jessier-eveI7MOcSmw-unsplash.jpg")`,
              }}
            >
              <div className="card-content">
                <h5 className="">Google Ads</h5>
                <p className="">
                  We understand the critical role that a well-designed and
                  user-friendly website plays in shaping your online presence
                  driving.
                </p>
              </div>
              <Link
                to="/services"
                className="btn card-btn"
                style={{ backgroundColor: "transparent" }}
              >
                More...
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container p-md-3 mb-5">
        <div className="row p-md-5">
          <h2 className="text-center mb-5 pb-3">Why Businesses Trust Us</h2>
          <div className="col-lg-4 mb-3">
            <h4 className="mb-5 text-muted">
              {" "}
              <i class="fa-solid fa-trophy"></i> Proven Results
            </h4>
            <p className="text">
              Increased client ROI through data-driven strategies.
            </p>
            <p className="text">
              Delivered higher rankings and visibility on Google.
            </p>
            <p className="text">
              Helped businesses generate quality leads consistently.
            </p>
          </div>
          <div className="col-lg-4 mb-3">
            <h4 className="mb-5 text-muted">
              <i class="fa-solid fa-headset"></i> 24/7 Support
            </h4>
            <p className="text">
              Always available through chat, email, or phone.{" "}
            </p>
            <p className="text">
              Quick response to technical or marketing queries.{" "}
            </p>
            <p className="text">
              Dedicated support team for hassle-free assistance.{" "}
            </p>
          </div>
          <div className="col-lg-4">
            <h4 className="mb-5 text-muted">
              <i class="fa-solid fa-globe"></i> End-to-End Services
            </h4>
            <p className="text">
              Website design, branding, and digital marketing in one place.{" "}
            </p>
            <p className="text">
              Single point of contact for all digital needs.{" "}
            </p>
            <p className="text">
              Consistency in brand message across all platforms.{" "}
            </p>
          </div>
        </div>
      </div>
      <ReviewCard />
      <h2 className="text-center mb-5">Get In Touch With Us Today</h2>
      <ContactForm />
      <SeoSection />
    </>
  );
}
