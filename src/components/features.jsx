import React from "react";
import Footer from "./Footer";
import NavBar from "./navbar";
import { Link } from "react-router-dom";

const Features = () => {
  return (
    <div>
      {/* <NavBar /> */}
      <div style={{height:'30px'}}></div>
      <section className="feature-section p-tb-100 overflow-x-hidden">
        <div className="container">
          <div className="section-title">
            <h2>Our valuable features</h2>
          </div>

          <div className="home-feature">
            <div className="home-feature-carousel owl-carousel owl-theme">
              <div className="item">
                <div className="feature-carousel-content">
                  <div className="feature-carousel-thumb status-blue">
                    <img src="assets/images/p2p.png" alt="feature" />
                  </div>
                  <div className="feature-carousel-details">
                    <h3>Decentralized Payments</h3>
                    <p>No CEO, No Commission, Decentralized Payments.</p>
                    <Link to="/" className="btn1">
                      <span>Read More +</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="feature-carousel-content">
                  <div className="feature-carousel-thumb status-orange">
                    <img src="assets/images/hand.png" alt="feature" />
                  </div>
                  <div className="feature-carousel-details">
                    <h3>Sustainable Cash flow</h3>
                    <p>Its Organized To Leverage On Members To Raise Funds.</p>
                    <Link to="/" className="btn1">
                      <span>Read More +</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="feature-carousel-content">
                  <div className="feature-carousel-thumb status-green">
                    <img src="assets/images/guide.png" alt="feature" />
                  </div>
                  <div className="feature-carousel-details">
                    <h3>Adequate Guidance</h3>
                    <p>
                      Members Control The System, The Admin Only Creates The
                      Structure
                    </p>
                    <Link to="/" className="btn1">
                      <span>Read More +</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="feature-carousel-content">
                  <div className="feature-carousel-thumb status-orange">
                    <img src="assets/images/alert.png" alt="feature" />
                  </div>
                  <div className="feature-carousel-details">
                    <h3>Reliable Investment</h3>
                    <p>
                      Not A Ponzi, Not A Pyramid Scheme, Not A Get Rich Quick
                      Program
                    </p>
                    <Link to="/" className="btn1">
                      <span>Read More +</span>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="item">
                <div className="feature-carousel-content">
                  <div className="feature-carousel-thumb status-blue">
                    <img src="assets/images/p2p.png" alt="feature" />
                  </div>
                  <div className="feature-carousel-details">
                    <h3>Decentralized Payments</h3>
                    <p>No CEO, No Commission, Decentralized Payments.</p>
                    <Link to="/" className="btn1">
                      <span>Read More +</span>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="item">
                <div className="feature-carousel-content">
                  <div className="feature-carousel-thumb status-orange">
                    <img src="assets/images/hand.png" alt="feature" />
                  </div>
                  <div className="feature-carousel-details">
                    <h3>Sustainable Cash flow</h3>
                    <p>Its Organized To Leverage On Members To Raise Funds.</p>
                    <Link to="/" className="btn1">
                      <span>Read More +</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="feature-carousel-content">
                  <div className="feature-carousel-thumb status-green">
                    <img src="assets/images/guide.png" alt="feature" />
                  </div>
                  <div className="feature-carousel-details">
                    <h3>Adequate Guidance</h3>
                    <p>
                      Members Control The System, The Admin Only Creates The
                      Structure
                    </p>
                    <Link to="/" className="btn1">
                      <span>Read More +</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="feature-carousel-content">
                  <div className="feature-carousel-thumb status-orange">
                    <img src="assets/images/alert.png" alt="feature" />
                  </div>
                  <div className="feature-carousel-details">
                    <h3>Reliable Investment</h3>
                    <p>
                      Not A Ponzi, Not A Pyramid Scheme, Not A Get Rich Quick
                      Program
                    </p>
                    <Link to="/" className="btn1">
                      <span>Read More +</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-contact-section overflow-hidden blue-gradient pt-100 pb-80">
        <div className="home-contact-bg-circle">
          <div className="home-contact-circle-item">
            <img src="assets/images/lg-circle-1.png" alt="circle" />
          </div>
          <div className="home-contact-circle-item">
            <img src="assets/images/lg-circle-1.png" alt="circle" />
          </div>
        </div>
        <div className="container">
          <div className="home-contact-inner">
            <h2>20,000 Users Now! Create Your Own Account To Get Started</h2>
            <ul className="section-button">
              <li>
                <Link
                  to="/users"
                  className="btn1 orange-gradient btn-with-image"
                >
                  <i className="flaticon-agenda"></i>
                  <i className="flaticon-agenda"></i>
                  Create Your Account
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Features;
