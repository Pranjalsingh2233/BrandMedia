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
                src="/Afridimain.jpg"
                alt="team"
                className=" profile"
                style={{ width: "12rem", height: "12rem" }}
              ></img>
            </div>
            <p>
              <b>Afridi Khan </b>
              <br /> Founder & SMM
            </p>
          </div>
        </div>
        <div className="col-md-4 col-sm-6">
          <div>
            <div className="d-flex justify-content-center mb-4">
              <img
                src="/Pranjal.jpg"
                alt="team"
                className=" profile"
                style={{ width: "12rem", height: "12rem" }}
              ></img>
            </div>{" "}
            <p>
              <b> Pranjal Singh </b>
              <br />
              Co-Founder & Full-Stack Web Developer
            </p>
          </div>
        </div>
        <div className="col-md-4 col-sm-6">
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
              Co-Founder & Google Ads
            </p>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 mt-3">
          <div>
            <div className="d-flex justify-content-center mb-4">
              <img
                src="/zishan.jpg"
                alt="team"
                className=" profile"
                style={{ width: "12rem", height: "12rem" }}
              ></img>
            </div>{" "}
            <p>
              <b> Zeshan Jamal </b>
              <br />
              Video Editor
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
