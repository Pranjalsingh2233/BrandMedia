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
              <div className="mb-3">⭐⭐⭐⭐</div>
              <p>
                "This was my first time running ads, and I was nervous about
                wasting money - but Afridi made the entire process stress-free.
                He helped me set a budget, designed high-converting creatives,
                and delivered results way better than I expected. Highly
                satisfied!"
              </p>
              <div className="profile-wrapper mt-auto">
                <div className="profile">J</div>
                <div className="fs-4 mb-1">@Random</div>
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
                "I recently ran ads, and I must say, I'm really impressed with
                the results. From the very beginning, he understood exactly what
                my business needed. The ad creatives were top-notch, and the
                targeting was spot-on. Within just a few days, I started seeing
                real engagement and quality leads coming in. He was
                professional, responsive, and clearly knows what he's doing when
                it comes to Facebook ads. Highly recommended if you're looking
                to grow your business online!""
              </p>
              <div className="profile-wrapper mt-auto">
                <div
                  className="profile"
                  style={{ backgroundColor: "#fff", color: "#000" }}
                >
                  J
                </div>
                <div className="fs-4 mb-1">@Random</div>
              </div>{" "}
            </div>
            <div
              className="review-cards"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="mb-3">⭐⭐⭐⭐</div>
              <p>
                "This was my first time running ads, and I was nervous about
                wasting money - but Afridi made the entire process stress-free.
                He helped me set a budget, designed high-converting creatives,
                and delivered results way better than I expected. Highly
                satisfied!"
              </p>
              <div className="profile-wrapper mt-auto">
                <div className="profile">J</div>
                <div className="fs-4 mb-1">@Random</div>
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
                "I recently ran ads, and I must say, I'm really impressed with
                the results. From the very beginning, he understood exactly what
                my business needed. The ad creatives were top-notch, and the
                targeting was spot-on. Within just a few days, I started seeing
                real engagement and quality leads coming in. He was
                professional, responsive, and clearly knows what he's doing when
                it comes to Facebook ads. Highly recommended if you're looking
                to grow your business online!""
              </p>
              <div className="profile-wrapper mt-auto">
                <div
                  className="profile"
                  style={{ backgroundColor: "#fff", color: "#000" }}
                >
                  J
                </div>
                <div className="fs-4 mb-1">@Random</div>
              </div>{" "}
            </div>
            {/* Duplicate review for smooth animation */}
            <div
              className="review-cards"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="mb-3">⭐⭐⭐⭐</div>
              <p>
                "This was my first time running ads, and I was nervous about
                wasting money - but Afridi made the entire process stress-free.
                He helped me set a budget, designed high-converting creatives,
                and delivered results way better than I expected. Highly
                satisfied!"
              </p>
              <div className="profile-wrapper mt-auto">
                <div className="profile">J</div>
                <div className="fs-4 mb-1">@Random</div>
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
                "I recently ran ads, and I must say, I'm really impressed with
                the results. From the very beginning, he understood exactly what
                my business needed. The ad creatives were top-notch, and the
                targeting was spot-on. Within just a few days, I started seeing
                real engagement and quality leads coming in. He was
                professional, responsive, and clearly knows what he's doing when
                it comes to Facebook ads. Highly recommended if you're looking
                to grow your business online!""
              </p>
              <div className="profile-wrapper mt-auto">
                <div
                  className="profile"
                  style={{ backgroundColor: "#fff", color: "#000" }}
                >
                  J
                </div>
                <div className="fs-4 mb-1">@Random</div>
              </div>{" "}
            </div>
            <div
              className="review-cards"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="mb-3">⭐⭐⭐⭐</div>
              <p>
                "This was my first time running ads, and I was nervous about
                wasting money - but Afridi made the entire process stress-free.
                He helped me set a budget, designed high-converting creatives,
                and delivered results way better than I expected. Highly
                satisfied!"
              </p>
              <div className="profile-wrapper mt-auto">
                <div className="profile">J</div>
                <div className="fs-4 mb-1">@Random</div>
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
                "I recently ran ads, and I must say, I'm really impressed with
                the results. From the very beginning, he understood exactly what
                my business needed. The ad creatives were top-notch, and the
                targeting was spot-on. Within just a few days, I started seeing
                real engagement and quality leads coming in. He was
                professional, responsive, and clearly knows what he's doing when
                it comes to Facebook ads. Highly recommended if you're looking
                to grow your business online!""
              </p>
              <div className="profile-wrapper mt-auto">
                <div
                  className="profile"
                  style={{ backgroundColor: "#fff", color: "#000" }}
                >
                  J
                </div>
                <div className="fs-4 mb-1">@Random</div>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
