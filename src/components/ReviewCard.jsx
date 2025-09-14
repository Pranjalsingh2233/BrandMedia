import React, { useState } from "react";

export default function ReviewCard() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="container-fluid p-md-3 mb-5">
      <h2 className="text-center">What Our Clients Say</h2>
      <div className="row p-md-5 mt-3">
        <div className="review-wrapper">
          <div
            className="review-track"
            style={{
              animationPlayState: isHovered ? "paused" : "running",
            }}
          >
            <div
              className="review-cards"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="mb-3">⭐⭐⭐⭐⭐</div>
              <p>
                "This was my first time running ads, and I was nervous about
                wasting money - but Afridi made the entire process stress-free.
                He helped me set a budget, designed high-converting creatives,
                and delivered results way better than I expected. Highly
                satisfied!"
              </p>
              <div className="profile-wrapper mt-auto">
                <div className="profile">S</div>
                <div className="fs-4 ">Shraddha Yadav</div>
              </div>
            </div>
            <div
              className="review-cards text-white"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{ backgroundColor: "#387ed1" }}
            >
              <div className="mb-3">⭐⭐⭐⭐⭐</div>
              <p>
                "We’re very impressed with Brand Media, the best digital
                marketing agency in Prayagraj. Their support in Local SEO, Meta
                Ads, and Instagram Ads helped our school rank higher on Google,
                gain visibility, and receive more genuine inquiries. Highly
                recommended for any business wanting fast growth and a strong
                online presence."
              </p>
              <div className="profile-wrapper mt-auto">
                <div
                  className="profile"
                  style={{ backgroundColor: "#fff", color: "#000" }}
                >
                  W
                </div>
                <div className="fs-4 ">Wonder Kids</div>
              </div>{" "}
            </div>
            <div
              className="review-cards"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="mb-3">⭐⭐⭐⭐</div>
              <p>
                "I recently used their Meta Ads service and was highly impressed
                with the results. The campaigns were well-planned, targeted, and
                delivered more leads with better conversions. The team is
                professional, responsive, and knows how to maximize ROI with
                Facebook & Instagram ads. If you’re looking to grow your brand
                online, I highly recommend their Meta Ads services."
              </p>
              <div className="profile-wrapper mt-auto">
                <div className="profile">A</div>
                <div className="fs-4 ">Ahmed Ali</div>
              </div>{" "}
            </div>
            <div
              className="review-cards text-white"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{ backgroundColor: "#387ed1" }}
            >
              <div className="mb-3">⭐⭐⭐⭐⭐</div>
              <p>
                "I had my website designed by their team and the experience was
                excellent. They delivered a modern, user-friendly, and
                professional-looking site that perfectly matches my brand. The
                design is clean, mobile-friendly, and optimized for performance.
                I highly recommend their website designing services to any
                business owner who wants a professional online presence and
                wants to stand out from the competition."
              </p>
              <div className="profile-wrapper mt-auto">
                <div
                  className="profile"
                  style={{ backgroundColor: "#fff", color: "#000" }}
                >
                  A
                </div>
                <div className="fs-4 ">Arjun Singh</div>
              </div>{" "}
            </div>
            {/* Duplicate review for smooth animation */}
            <div
              className="review-cards"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="mb-3">⭐⭐⭐⭐⭐</div>
              <p>
                "This was my first time running ads, and I was nervous about
                wasting money - but Afridi made the entire process stress-free.
                He helped me set a budget, designed high-converting creatives,
                and delivered results way better than I expected. Highly
                satisfied!"
              </p>
              <div className="profile-wrapper mt-auto">
                <div className="profile">S</div>
                <div className="fs-4 ">Shraddha Yadav</div>
              </div>{" "}
            </div>
            <div
              className="review-cards text-white"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{ backgroundColor: "#387ed1" }}
            >
              <div className="mb-3">⭐⭐⭐⭐⭐</div>
              <p>
                "We’re very impressed with Brand Media, the best digital
                marketing agency in Prayagraj. Their support in Local SEO, Meta
                Ads, and Instagram Ads helped our school rank higher on Google,
                gain visibility, and receive more genuine inquiries. Highly
                recommended for any business wanting fast growth and a strong
                online presence."
              </p>
              <div className="profile-wrapper mt-auto">
                <div
                  className="profile"
                  style={{ backgroundColor: "#fff", color: "#000" }}
                >
                  W
                </div>
                <div className="fs-4 ">Wonder Kids</div>
              </div>{" "}
            </div>
            <div
              className="review-cards"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="mb-3">⭐⭐⭐⭐</div>
              <p>
                "I recently used their Meta Ads service and was highly impressed
                with the results. The campaigns were well-planned, targeted, and
                delivered more leads with better conversions. The team is
                professional, responsive, and knows how to maximize ROI with
                Facebook & Instagram ads. If you’re looking to grow your brand
                online, I highly recommend their Meta Ads services."
              </p>
              <div className="profile-wrapper mt-auto">
                <div className="profile">A</div>
                <div className="fs-4 ">Ahmed Ali</div>
              </div>{" "}
            </div>
            <div
              className="review-cards text-white"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{ backgroundColor: "#387ed1" }}
            >
              <div className="mb-3">⭐⭐⭐⭐⭐</div>
              <p>
                "I had my website designed by their team and the experience was
                excellent. They delivered a modern, user-friendly, and
                professional-looking site that perfectly matches my brand. The
                design is clean, mobile-friendly, and optimized for performance.
                I highly recommend their website designing services to any
                business owner who wants a professional online presence and
                wants to stand out from the competition."
              </p>
              <div className="profile-wrapper mt-auto">
                <div
                  className="profile"
                  style={{ backgroundColor: "#fff", color: "#000" }}
                >
                  A
                </div>
                <div className="fs-4 ">Arjun Singh</div>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
