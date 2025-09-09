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
        if (newStats[0] >= 100) {
          clearInterval(interval);
          return prev;
        }
        newStats[0] = newStats[0] + 1;
        return newStats;
      });
    }, 30);

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
        if (newStats[2] >= 50) {
          clearInterval(interval3);
          return prev;
        }
        newStats[2] = newStats[2] + 1;
        return newStats;
      });
    }, 60);

    return () => {
      clearInterval(interval);
      clearInterval(interval2);
      clearInterval(interval3);
    };
  }, [inView]);

  return (
    <>
      <Seo
        title="Best Digital Marketing Company in India"
        description="We help brands grow online with SEO, PPC, and social media marketing."
      />
      <div className="container-fluid wrapper pt-5 p-lg-3 fix-top mb-5">
        <div className="row p-lg-5 flex-wrap-reverse justify-content-between w-100">
          <div className="col-lg-6 p-xxl-5 text-white pb-5 text-center text-lg-start">
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
          <div className="col-lg-6 col-xxl-auto text-center text-lg-start">
            <img
              src="/antar-ray-uVo-oNHyTTc-unsplash.png"
              alt="social"
              className="img-fluid mb-5"
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
              title="Social Engine Marketing"
              para="Strengthen your brand identity and connect with your audience through impactful social media. Our tailored campaigns spark engagement and grow your community."
              icon="fa-solid fa-flag"
            />
          </div>
          <div className="col-xl-4 col-md-6">
            <Card
              title="Website Design and Development"
              para="Create a powerful first impression with a sleek, user-friendly website. Our expert design and development services ensure a seamless experience that drives results."
              icon="fa-solid fa-code"
            />
          </div>
          <div className="col-xl-4 col-md-6">
            {" "}
            <Card
              title="Social Media Optimization"
              para="We create impactful content that informs, entertains, and inspires—keeping your audience engaged while strengthening brand loyalty."
              icon="fa-solid fa-ranking-star"
            />
          </div>
          <div className="col-xl-4 col-md-6">
            <Card
              title="Paid Advertising (PPC)"
              para="Maximize your reach with targeted paid ads on Google, Facebook, and beyond. We design data-driven campaigns that deliver clicks, leads, and conversions efficiently."
              icon="fa-solid fa-money-bill-trend-up"
            />
          </div>
          <div className="col-xl-4 col-md-6">
            <Card
              title="Performance Tracking"
              para="We monitor and analyze your digital campaigns with advanced analytics, giving you clear insights to optimize performance and maximize ROI."
              icon="fa-solid fa-chart-pie"
            />
          </div>
        </div>
      </div>
      <div className={`container p-md-5 mt-5 mb-5 `}>
        <h2 className="mb-3 text-center">Your Growth Partner</h2>
        <div className="row align-items-center">
          <div className="col-lg-6 p-md-5 text-muted text-center text-lg-start">
            <img
              className="social img-fluid"
              src="/luky-triohandoko-eecTcKqXpz8-unsplash.png"
              alt="work"
              width={600}
              height={300}
              fetchpriority="high"
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
      <ReviewCard />
      <h2 className="text-center mb-5">Get In Touch With Us Today</h2>
      <ContactForm />
      <SeoSection />
    </>
  );
}
