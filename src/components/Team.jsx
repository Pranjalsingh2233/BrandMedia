import React from "react";

export default function Team() {
  return (
    <div className="container p-md-3 mb-5">
      <h2 className="text-center mb-5">People at Brand Media</h2>
      <div className="row p-lg-5 text-center">
        <div className="col-md-4 col-sm-6">
          <div>
            <div className="d-flex justify-content-center mb-4">
              <img
                src="/social.jpg"
                alt="team"
                className=" profile"
                style={{ width: "12rem", height: "12rem" }}
              ></img>
            </div>
            <p>
              <b>Afridi Khan </b>
              <br /> Founder & SEO
            </p>
          </div>
        </div>
        <div className="col-md-4 col-sm-6">
          <div>
            <div className="d-flex justify-content-center mb-4">
              <img
                src="/social.jpg"
                alt="team"
                className=" profile"
                style={{ width: "12rem", height: "12rem" }}
              ></img>
            </div>{" "}
            <p>
              <b> Pranjal Singh </b>
              <br />
              Founder & Full-Stack Web Developer
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div>
            <div className="d-flex justify-content-center mb-4">
              <img
                src="/forest-simon-ZKbve9f7Mp4-unsplash.jpg"
                alt="team"
                className=" profile"
                style={{ width: "12rem", height: "12rem" }}
              ></img>
            </div>{" "}
            <p>
              <b> Virendra Tiwari </b>
              <br />
              Gandu Gutka
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
