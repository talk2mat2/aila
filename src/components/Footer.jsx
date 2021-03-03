import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-bg">
      <div className="container">
        <div className="footer-upper">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-4">
              <div className="footer-content-item">
                <div className="footer-logo">
                  <Link to="/">
                    <img src="assets/images/logo-white.png" alt="logo" />
                  </Link>
                </div>
                <div className="footer-details">
                  <p>
                    Intergrity Family And Friends been in existence since 2009
                    in the United States, United Kingdom, Canada, Australia,
                    Europe and Africa in various forms.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-2">
              <div className="footer-content-list footer-content-item">
                <div className="footer-content-title">
                  <h3>Support</h3>
                </div>
                <ul className="footer-details footer-list">
                  <li>
                    <Link to="/FAQS">FAQ's</Link>
                  </li>
                  {/* <li>
                    <Link to="/PrivacyPolicies">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="/terms">Terms &amp; Conditions</Link>
                  </li> */}
                  <li>
                    <Link to="ContactUs">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-2">
              <div className="footer-content-list footer-content-item">
                <div className="footer-content-title">
                  <h3>Company</h3>
                </div>
                <ul className="footer-details footer-list">
                  <li>
                    <Link to="/AboutUs">About Us</Link>
                  </li>
                  <li>
                    <Link to="/Features">Features</Link>
                  </li>

                  {/* <!-- <li><a href="  blogs.html">Blogs</a></li> --> */}
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4">
              <div className="footer-content-list footer-content-item">
                <ul className="footer-details footer-list">
                  <li>
                    Email:{" "}
                    <span>
                      <a href="mailto:info@alia.com">info@integrated.com</a>
                    </span>
                  </li>
                  <li>
                    Phone:{" "}
                    <span>
                      <a href="tel:(+00)67834598">(+00) 678 345 98</a>
                    </span>
                  </li>
                  {/* <li>
                    Faq: <span>+(456) 332-897-234</span>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-lower">
          <div className="footer-lower-item footer-copyright-text">
            <p>Copyright ©2021 Intergrity Family And Friends(IFF)</p>
          </div>
          <div className="footer-lower-item footer-social-logo">
            <ul className="footer-social-list">
              <li className="social-btn social-btn-fb">
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li className="social-btn social-btn-tw">
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="social-btn social-btn-ins">
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li className="social-btn social-btn-pin">
                <a href="#">
                  <i className="fab fa-pinterest-p"></i>
                </a>
              </li>
              <li className="social-btn social-btn-yt">
                <a href="#">
                  <i className="fab fa-youtube"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
