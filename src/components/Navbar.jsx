import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function () {
  const location = useLocation();

  return (
    <header>
      <nav class="navbar navbar-expand-md bg-body-tertiar sticky-top border-bottom">
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
                  >
                    Contact
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    className="ms-md-5 btn mt-3 mt-md-0"
                    to="/contact"
                    style={{ padding: "0.6rem 3rem", borderRadius: "2rem" }}
                  >
                    Get Started
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
