import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function () {
  const location = useLocation();

  const handleClose = () => {
    const offcanvas = document.querySelector(".offcanvas.show");
    if (offcanvas) {
      const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvas);
      bsOffcanvas.hide();
    }
  };

  return (
    <header>
      <nav class="navbar navbar-expand-md fixed-top border-bottom">
        <div class="container">
          <Link class="navbar-brand" to="/">
            Brand Media
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
                Offcanvas
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                  <Link
                    className={
                      location.pathname === "/" ? "nav-link text" : "nav-link"
                    }
                    to="/"
                    onClick={handleClose}
                  >
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    className={
                      location.pathname === "/about"
                        ? "nav-link text"
                        : "nav-link"
                    }
                    to="/about"
                    onClick={handleClose}
                  >
                    About
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    className={
                      location.pathname === "/services"
                        ? "nav-link text"
                        : "nav-link"
                    }
                    to="/services"
                    onClick={handleClose}
                  >
                    Services
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    className={
                      location.pathname === "/team"
                        ? "nav-link text"
                        : "nav-link"
                    }
                    to="/team"
                    onClick={handleClose}
                  >
                    Team
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    className={
                      location.pathname === "/contact"
                        ? "nav-link text"
                        : "nav-link"
                    }
                    to="/contact"
                    onClick={handleClose}
                  >
                    Contact
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    className="ms-md-5 btn mt-3 mt-md-0"
                    to="/contact"
                    onClick={handleClose}
                    style={{ padding: "0.6rem 3rem", borderRadius: "2rem" }}
                  >
                    Get Started
                  </Link>
                </li>
                <div className="dis-hide">
                  <hr />
                  <div className="d-flex">
                    <i
                      class="fa-brands fa-instagram profile mb-4 me-4"
                      style={{ height: "40px", width: "40px" }}
                    ></i>
                    <i
                      class="fa-brands fa-whatsapp profile me-4"
                      style={{ height: "40px", width: "40px" }}
                    ></i>
                    <i
                      class="fa-brands fa-square-linkedin profile"
                      style={{ height: "40px", width: "40px" }}
                    ></i>
                  </div>
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
                      <p>+91 902 684 0092</p>
                    </div>
                    <div className="col-2 mb-3">
                      <i
                        class="fa-solid fa-envelope profile"
                        style={{ height: "40px", width: "40px" }}
                      ></i>
                    </div>
                    <div className="col-10">
                      <div>Email Address</div>
                      <p>BrandMedia@gmail.com</p>
                    </div>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
