import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function Skills() {
  const [percent, setPercent] = useState([0, 0, 0, 0]);
  const target = [95, 95, 95, 90];
  const content = [
    "Search Engine Optimization (SEO)",
    "Web Development",
    "Paid Advertising (PPC)",
    "Content Marketing",
  ];

  const { ref, inView } = useInView({
    threshold: 0.5, // 50% visible
    triggerOnce: true,
  });

  useEffect(() => {
    if (!inView) return;

    let current = [0, 0, 0, 0];

    const interval = setInterval(() => {
      let done = true;
      current = current.map((val, idx) => {
        if (val < target[idx]) {
          done = false;
          return val + 1;
        }
        return val;
      });
      setPercent([...current]);
      if (done) clearInterval(interval);
    }, 9.5);

    return () => clearInterval(interval);
  }, [inView]);

  return (
    <div className="container p-md-3 mb-5">
      <h2 className="text-center mb-5">Our Skills</h2>
      <div className="row p-md-5" ref={ref}>
        {percent.map((val, idx) => (
          <div className="col-lg-3 col-sm-6 progress-div mb-5" key={idx}>
            <div
              className="outer-circle"
              style={{
                animation: inView
                  ? `${
                      idx === 3 ? "progress2" : "progress"
                    } 1s ease-out forwards`
                  : "",
              }}
            >
              <div className="inner-circle">{val}%</div>
            </div>
            <div className="fw-semibold">{content[idx]}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
