import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SeoSection from "../components/SeoSection";
import ContactForm from "../components/ContactForm";
import ReviewCard from "../components/ReviewCard";
import Seo from "../components/Seo";
import Card from "../components/Card";
import { useInView } from "react-intersection-observer";

export default function Home() {
  const [stats, setStats] = useState([0, 0, 0]);
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  useEffect(() => {
    if (!inView) return;
    const interval = setInterval(() => {
      setStats((prev) => {
        const newStats = [...prev];
        if (newStats[0] >= 50) {
          clearInterval(interval);
          return prev;
        }
        newStats[0] = newStats[0] + 1;
        return newStats;
      });
    }, 60);

    const interval2 = setInterval(() => {
      setStats((prev) => {
        const newStats = [...prev];
        if (newStats[1] >= 10) {
          clearInterval(interval2);
          return prev;
        }
        newStats[1] = newStats[1] + 1;
        return newStats;
      });
    }, 300);

    const interval3 = setInterval(() => {
      setStats((prev) => {
        const newStats = [...prev];
        if (newStats[2] >= 30) {
          clearInterval(interval3);
          return prev;
        }
        newStats[2] = newStats[2] + 1;
        return newStats;
      });
    }, 100);

    return () => {
      clearInterval(interval);
      clearInterval(interval2);
      clearInterval(interval3);
    };
  }, [inView]);

  return (
    <>
      <Seo
        title="Best Digital Marketing Company in Prayagraj, Uttar Pradesh, India"
        description="We help brands grow online with SEO, PPC, social media marketing, and custom website design to drive traffic, boost sales, and build your brand"
      />
      <div className="container-fluid gradient pt-5 p-lg-3 fix-top mb-5">
        <div className="row p-lg-5 justify-content-between w-100 align-items-center">
          <div
            className="col-lg-6 p-xxl-5 text-center text-lg-start fix-top"
            style={{ position: "relative", bottom: "3rem" }}
          >
            <h1>
              Partner with the Leading <br />
              <span className="text"> Branding & Digital Marketing</span>
              <br />
              Company in Uttar Pradesh
            </h1>
            <p className="mb-4 text-muted">
              Website Development, Paid Ads & Digital Marketing that Deliver
              Results.
            </p>
            <Link to="/contact" className="btn me-0 me-lg-5">
              Start Ranking Now
            </Link>
          </div>
          <div
            className="col-lg-6 col-xxl-auto text-center text-lg-start"
            style={{ aspectRatio: "16 / 9" }}
          >
            <img
              src="/hero1.png"
              alt="social"
              className="img-fluid float"
              width={600}
              height={300}
              fetchpriority="high"
            ></img>
          </div>
        </div>
      </div>
      <div className={`container p-md-3 `}>
        <div className="row p-md-5 mb-5 mb-md-0">
          <h2 className="text-center mb-3 mb-md-0">
            The Power of <span className="text">Performance Marketing</span>
          </h2>
          <div className="col-lg-12 text-center p-md-5">
            <p className="text-muted mb-5">
              Every client, every campaign, and every success adds to our
              journey of making brands shine in the digital space. With a
              dedicated team and proven strategies, we’ve built trust, delivered
              measurable results, and helped businesses grow.
            </p>
            <div className="stats-wrapper" ref={ref}>
              <div>
                <h3>
                  {stats[2]}
                  <sup>+</sup>
                </h3>
                <p>Satisfied Clients</p>
              </div>
              <div>
                <h3>
                  {stats[1]}
                  <sup>+</sup>
                </h3>
                <p>Expert Member</p>
              </div>
              <div>
                <h3>
                  {stats[0]}
                  <sup>+</sup>
                </h3>
                <p>Works Done</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`container p-md-3 mb-5`}>
        <h2 className="mb-5 pb-3 text-center">What We Offer</h2>
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
      <div className={`container p-md-5 mt-5 mb-5 `}>
        <h2 className="mb-3 text-center">Your Growth Partner</h2>
        <div className="row align-items-center">
          <div className="col-lg-6 text-muted text-center text-lg-start">
            <video autoPlay muted loop playsInline className="video">
              <source src="/progress.mp4" type="video/mp4" />
            </video>
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
      <ReviewCard />
      <h2 className="text-center mb-5">Get In Touch With Us Today</h2>
      <ContactForm />
      <SeoSection />
    </>
  );
}
