import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-top mt-5" style={{ backgroundColor: "#fbfbfb" }}>
      <div className="container">
        <div className=" row p-3 p-md-5">
          <div className="col-md-4 mb-3">
            {/* <img
              src="images/logo.svg"
              style={{ width: "50%", minWidth: "150px" }}
            /> */}
            <h3 className="mb-3">Brand Media</h3>
            <p className="mb-3 text-muted">
              Optimize your content with the right keywords and proven SEO
              practices to secure top search rankings and boost visibility.
            </p>
            <div className="d-flex">
              <a href="" target="_blank" className="mb-4 me-3">
                <i
                  class="fa-brands fa-instagram profile"
                  style={{ height: "40px", width: "40px" }}
                ></i>
              </a>
              <a
                href="https://wa.me/919452873121"
                target="_blank"
                className="me-3"
              >
                <i
                  class="fa-brands fa-whatsapp profile "
                  style={{ height: "40px", width: "40px" }}
                ></i>
              </a>
              <a href="" target="_blank">
                <i
                  class="fa-brands fa-square-linkedin profile"
                  style={{ height: "40px", width: "40px" }}
                ></i>
              </a>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <p className="fs-4">Quick Links</p>
            <Link to="/about" className="text-muted">
              About
            </Link>
            <br />
            <Link to="/services" className="text-muted ">
              Services
            </Link>
            <br />
            <Link to="/team" className="text-muted ">
              Team
            </Link>
            <br />
            <Link to="/contact" className="text-muted ">
              Contact Us
            </Link>
          </div>
          <div className="col-md-4">
            {" "}
            <p className="fs-4">Get in touch</p>
            <div className="row align-items-center g-2">
              <div className="col-2 mb-3">
                <i
                  className="fa-solid fa-location-dot profile"
                  style={{ height: "40px", width: "40px" }}
                ></i>
              </div>
              <div className="col-10">
                <div>Our Location</div>
                <p>Rajrooppur, Prayagraj</p>
              </div>
              <div className="col-2 mb-3">
                <i
                  class="fa-solid fa-phone profile"
                  style={{ height: "40px", width: "40px" }}
                ></i>
              </div>
              <div className="col-10">
                <div>Phone Number</div>
                <p>+91 945-287-3121</p>
              </div>
              <div className="col-2 mb-3">
                <i
                  class="fa-solid fa-envelope profile"
                  style={{ height: "40px", width: "40px" }}
                ></i>
              </div>
              <div className="col-10">
                <div>Email Address</div>
                <p>brandmedia10112003@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="p-md-5 footer">
            <div> &copy; 2024-2025, Brand Media Ltd.</div>
            <div> All rights reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
