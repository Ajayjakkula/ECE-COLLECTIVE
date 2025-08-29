import React from "react";
import "./navbar.css"; // Add this at the top

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Needed for dropdowns
import { FaUserCircle, FaBars, FaCompass } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white sticky-top shadow-sm">
      <div className="container-fluid">
        {/* Brand */}
        <a
          className="navbar-brand fw-bold d-flex align-items-center"
          href="/"
          style={{ gap: "0.75rem" }}
        >
          <FaCompass size={20} className="text-danger" />
          <span>ECE-COLLECTIVE</span>
        </a>

        {/* Toggler */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FaBars size={20} className="text-danger" />
        </button>

        {/* Nav links */}
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNavAltMarkup"
        >
          <div
            className="navbar-nav"
            style={{ gap: "1rem", fontWeight: 600 }}
          >
            <a className="nav-link px-3 py-2 rounded-pill hover-link" href="/">
              HOME
            </a>
            <a
              className="nav-link px-3 py-2 rounded-pill hover-link"
              href="/add-post"
            >
              ADD A POST
            </a>
            <a className="nav-link px-3 py-2 rounded-pill hover-link" href="/faculty">
              FACULTY
            </a>
          </div>
        </div>

        {/* User dropdown */}
        <div className="dropdown ms-auto">
          <button
            className="btn rounded-pill d-flex align-items-center"
            type="button"
            id="menuDropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{ gap: "0.5rem", padding: "0.5rem 1rem" }}
          >
            <FaUserCircle size={20} className="text-danger" />
            <span className="d-none d-sm-inline fw-semibold">Account</span>
          </button>
          <ul
            className="dropdown-menu dropdown-menu-end rounded-4 p-2"
            aria-labelledby="menuDropdown"
          >
            <li>
              <a className="dropdown-item rounded-3 py-2 px-3" href="/login">
                Login
              </a>
            </li>
            <li>
              <a className="dropdown-item rounded-3 py-2 px-3" href="/signup">
                Sign Up
              </a>
            </li>
            <li>
              <a
                className="dropdown-item text-danger fw-semibold rounded-3 py-2 px-3"
                href="/logout"
              >
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Optional scroll effect */}
      <script>
        {`
          window.addEventListener('scroll', function() {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
              navbar.classList.add('scrolled');
            } else {
              navbar.classList.remove('scrolled');
            }
          });
        `}
      </script>
    </nav>
  );
};

export default Navbar;
