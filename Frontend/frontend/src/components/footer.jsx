import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaUserGraduate, FaEnvelope, FaPhone } from "react-icons/fa";
import "./footer.css"
const Footer = () => {
  return (
    <footer className="footer mt-auto py-5 position-relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="footer-bg"></div>

      <div className="container position-relative">
        <div className="row g-4">
          {/* About */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="footer-section">
              <h5 className="footer-title mb-3">
                <FaUserGraduate className="me-2 text-primary" />
                About ECE-COLLECTIVE
              </h5>
              <p className="footer-text">
                ECE-COLLECTIVE is a platform for students and faculty of Electronics & Communication Engineering to share posts, updates, and academic resources. Connect, collaborate, and grow together!
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="footer-section">
              <h5 className="footer-title mb-3">
                <FaUserGraduate className="me-2 text-primary" />
                Quick Links
              </h5>
              <ul className="list-unstyled footer-links">
                <li>
                  <a href="/" className="footer-link">
                    <i className="fas fa-home me-2"></i>Home
                  </a>
                </li>
                <li>
                  <a href="/posts" className="footer-link">
                    <i className="fas fa-list me-2"></i>All Posts
                  </a>
                </li>
                <li>
                  <a href="/posts/add" className="footer-link">
                    <i className="fas fa-plus me-2"></i>Add New Post
                  </a>
                </li>
                <li>
                  <a href="/faculty" className="footer-link">
                    <i className="fas fa-user me-2"></i>Faculty
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Us */}
          <div className="col-lg-4 col-md-12 mb-4">
            <div className="footer-section">
              <h5 className="footer-title mb-3">
                <FaEnvelope className="me-2 text-primary" />
                Contact Us
              </h5>
              <div className="contact-info mb-3">
                <p className="footer-contact">
                  <FaEnvelope className="me-3 text-primary" />
                  <span>ececollective@example.com</span>
                </p>
                <p className="footer-contact">
                  <FaPhone className="me-3 text-primary" />
                  <span>+91 98765 43210</span>
                </p>
              </div>
              <div className="social-links">
                <a href="#" className="social-link" aria-label="Facebook">
                  <FaFacebookF />
                </a>
                <a href="#" className="social-link" aria-label="Twitter">
                  <FaTwitter />
                </a>
                <a href="#" className="social-link" aria-label="Instagram">
                  <FaInstagram />
                </a>
                <a href="#" className="social-link" aria-label="LinkedIn">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider my-4"></div>

        {/* Copyright */}
        <div className="text-center">
          <p className="copyright-text mb-0">
            &copy; 2025 <span className="brand-name">ECE-COLLECTIVE</span>. All Rights Reserved.
            <span className="separator">|</span>
            Made with <i className="fas fa-heart text-danger"></i> for ECE students
          </p>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="footer-decoration"></div>
    </footer>
  );
};

export default Footer;
