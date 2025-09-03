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
            <h3>Brand Media</h3>
          </div>
          <div className="col-md-4 mb-3">
            <p className="fs-4">Quick Links</p>
            <Link to="/about" className="text-muted">
              About
            </Link>
            <br />
            <Link to="/services" className="text-muted ">
              Services
            </Link>
            <br />
            <Link to="/contact" className="text-muted ">
              Contact Us
            </Link>
            <br />
          </div>
          <div className="col-md-4">
            {" "}
            <p className="fs-4">Get in touch</p>
            <div className="text-muted mb-2">
              Kalindipuram, Rajrooppur,
              <br />
              Prayagraj- 211011
            </div>
            <div className="text-muted mb-2">+91 902 684 0092</div>
            <div className="text-muted">brandMedia@gmail.com</div>
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
