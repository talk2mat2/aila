import React, { useEffect } from "react";
import Footer from "./Footer";
import NavBar from "./navbar";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Index = () => {
  //const history = useHistory();

  return (
    <div>
      {/* <div className="preloader orange-gradient">
        <div className="preloader-wrapper">
          <div className="preloader-grid">
            <div className="preloader-grid-item preloader-grid-item-1"></div>
            <div className="preloader-grid-item preloader-grid-item-2"></div>
            <div className="preloader-grid-item preloader-grid-item-3"></div>
            <div className="preloader-grid-item preloader-grid-item-4"></div>
            <div className="preloader-grid-item preloader-grid-item-5"></div>
            <div className="preloader-grid-item preloader-grid-item-6"></div>
            <div className="preloader-grid-item preloader-grid-item-7"></div>
            <div className="preloader-grid-item preloader-grid-item-8"></div>
            <div className="preloader-grid-item preloader-grid-item-9"></div>
          </div>
        </div>
      </div> */}

      <NavBar />

      <header className="header header-bg-2">
        <div className="header-shape-2">
          <div className="header-shape-2-item">
            <img src="assets/images/header-2-shape.png" alt="shape" />
          </div>
        </div>
        <div className="container-fluid">
          <div className="header-inner">
            <div className="row align-items-center">
              <div className="col-sm-12 col-md-12 col-lg-6">
                <div className="header-content-2">
                  <h1>Invest With The World's Most Trusted P2P Platform</h1>
                  <p>
                    A Community of forward thinking individuals coming together
                    with trust and integrity to gift and be gifted by following
                    a simple process
                  </p>
                  <ul className="section-button">
                    <li>
                      <Link to="/users">
                        <button className="btn1 orange-gradient btn-with-image">
                          <i className="flaticon-login"></i>
                          <i className="flaticon-login"></i>
                          Get Started
                        </button>
                      </Link>
                    </li>
                    <li>
                      <a
                        className="btn1 btn-with-image blue-gradient video-modal"
                        href="http://www.youtube.com/watch?v=aJJoV0xSDqA"
                      >
                        <i className="flaticon-play-button-1"></i>
                        <i className="flaticon-play-button-1"></i>
                        Intro Video
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-6">
                <div className="header-content-2-img">
                  <img src="assets/images/imac.png" alt="imac" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="home-about-section-2 bg-off-white pt-100 pb-70 overflow-hidden">
        <div className="container-fluid p-0">
          <div className="home-about-content">
            <div className="row align-items-center m-0">
              <div className="col-sm-12 col-md-12 col-lg-6 p-0">
                <div className="home-facility-overview desk-ml-auto pr-20 pl-20 pb-30">
                  <h3 className="home-about-title">
                    Suitable For individuals from all works of life
                  </h3>
                  <p className="home-about-para">
                    Are you a Worker, an enterprenuer, a pensioner, a retiree
                    e.t.c?
                    <br />
                    Then Check this out:
                  </p>
                  <div className="home-about-list">
                    <div className="home-about-list-item">
                      <img src="assets/images/check.png" alt="checl" />
                      International Payments
                    </div>
                    <div className="home-about-list-item">
                      <img src="assets/images/check.png" alt="checl" />
                      Premium Supports
                    </div>
                    <div className="home-about-list-item">
                      <img src="assets/images/check.png" alt="checl" />
                      Structured Payments
                    </div>
                    <div className="home-about-list-item">
                      <img src="assets/images/check.png" alt="checl" />
                      Secured Features
                    </div>
                    <div className="home-about-list-item">
                      <img src="assets/images/check.png" alt="checl" />
                      Quality Networking
                    </div>
                    <div className="home-about-list-item">
                      <img src="assets/images/check.png" alt="checl" />
                      Trustworthy individuals
                    </div>
                  </div>
                  <div className="home-about-animation">
                    <div className="home-animation-item">
                      <img
                        src="assets/images/curve-line.png"
                        alt="animated-icon"
                      />
                    </div>
                    <div className="home-animation-item">
                      <img
                        src="assets/images/triangle.png"
                        alt="animated-icon"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-6 p-0">
                <div className="home-facility-item img-right-res pb-30">
                  <img
                    src="assets/images/home-enterprise-2.png"
                    alt="facility"
                  />
                </div>
              </div>
            </div>
            <div className="section-mtb-40"></div>

            <div className="row align-items-center m-0">
              <div className="col-sm-12 col-md-12 col-lg-6 p-0">
                <div className="home-facility-item img-left-res pb-30">
                  <img src="assets/images/home-business-2.png" alt="facility" />
                  <div className="home-about-animated-img home-animated-img-right">
                    <img src="assets/images/smartphone1.png" alt="smartphone" />
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-6 p-0">
                <div className="home-facility-overview desk-mr-auto pr-20 pl-20 pb-30">
                  <h3 className="home-about-title">
                    A fully integrated Suitable Platform for forward thinking
                    individuals
                  </h3>
                  <p className="home-about-para">
                    Join thousands of individuals that has become financially
                    stable today through INTERGRITY FAMILY AND FRIENDS(IFF)
                  </p>
                  <div className="home-about-list">
                    <div className="home-about-list-item">
                      <img src="assets/images/check.png" alt="checl" />
                      Easy Cashouts
                    </div>
                    <div className="home-about-list-item">
                      <img src="assets/images/check.png" alt="checl" />
                      Affiliates and partnerships
                    </div>
                    <div className="home-about-list-item">
                      <img src="assets/images/check.png" alt="checl" />
                      Worldwide availability
                    </div>
                    <div className="home-about-list-item">
                      <img src="assets/images/check.png" alt="checl" />
                      Decentralized system
                    </div>
                    <div className="home-about-list-item">
                      <img src="assets/images/check.png" alt="checl" />
                      Secured Investment
                    </div>
                    <div className="home-about-list-item">
                      <img src="assets/images/check.png" alt="checl" />
                      Acceptance of Multiple Currencies
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="section-mtb-40"></div>

            <div className="row align-items-center m-0">
              <div className="col-sm-12 col-md-12 col-lg-6 p-0">
                <div className="home-facility-overview desk-ml-auto pr-20 pl-20 pb-30">
                  <h3 className="home-about-title">Our Valuable Features</h3>
                  {/* <!-- <p className="home-about-para">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
eiusmod cste et dolore magnam aliquam quaerat voluptatem.</p> --> */}
                  <div className="home-about-list">
                    <div className="home-about-list-item">
                      <img
                        src="./Aila - Online Banking &amp; Payment Processing HTML Template_files/check.png"
                        alt="checl"
                      />
                      Members control the system, the admin only creates the
                      structure
                    </div>
                    <div className="home-about-list-item">
                      <img
                        src="./Aila - Online Banking &amp; Payment Processing HTML Template_files/check.png"
                        alt="checl"
                      />
                      Not a Ponzi, Not a pyramid scheme, Not a get rich quick
                      Program
                    </div>
                    <div className="home-about-list-item">
                      <img
                        src="./Aila - Online Banking &amp; Payment Processing HTML Template_files/check.png"
                        alt="checl"
                      />
                      No CEO, No commission, Decentralized Payments
                    </div>
                    <div className="home-about-list-item">
                      <img
                        src="./Aila - Online Banking &amp; Payment Processing HTML Template_files/check.png"
                        alt="checl"
                      />
                      Its organized to leverage on members to raise funds
                    </div>
                  </div>
                  <div className="home-about-animation entrepreneur-animation">
                    <div className="home-animation-item">
                      <img
                        src="./Aila - Online Banking &amp; Payment Processing HTML Template_files/curve-line.png"
                        alt="animated-icon"
                      />
                    </div>
                    <div className="home-animation-item">
                      <img
                        src="./Aila - Online Banking &amp; Payment Processing HTML Template_files/triangle.png"
                        alt="animated-icon"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-6 p-0">
                <div className="home-facility-item img-right-res pb-30">
                  <img
                    src="./Aila - Online Banking &amp; Payment Processing HTML Template_files/home-entreprenour-2.png"
                    alt="facility"
                  />
                  <div className="home-about-animated-img home-animated-table-img home-animated-img-left">
                    <img
                      src="./Aila - Online Banking &amp; Payment Processing HTML Template_files/data-table.png"
                      alt="data-table"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="counter-section pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Our Key Performance Indicators</h2>
          </div>

          <div className="counter-content">
            <div className="counter-item">
              <h3>
                <span className="counter">20</span>
                <span className="counter-text-lg">k</span>
              </h3>
              <p>20 thousand users</p>
            </div>
            <div className="counter-item">
              <h3>
                <span className="counter">400</span>
                <span className="counter-text-sm">%</span>
              </h3>
              <p>Return On Investment</p>
              <div className="counter-loader">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div className="counter-item">
              <h3>
                <span className="counter">10</span>
                <span className="counter-text-sm">+</span>
              </h3>
              <p>Countries using</p>
              <div className="counter-loader">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div className="counter-item">
              <h3>
                <span className="counter">10</span>
                <span className="counter-text-lg">+</span>
              </h3>
              <p>New Registered Users Daily</p>
              <div className="counter-loader">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-facility-section pt-100 pb-70 border-top-mob">
        <div className="container">
          <div className="home-facility-content">
            <div className="row align-items-center">
              <div className="col-sm-12 col-md-12 col-lg-6">
                <div className="home-facility-item pb-30">
                  <div className="home-facility-details">
                    <div className="home-service-start">
                      <h2>How it works</h2>
                      <p>
                        1. Register only a friend and family member who you love
                        and trust that has integrity
                      </p>
                      <p>
                        2. Send your gift to the person who is in the gifted
                        position{" "}
                      </p>
                      <p>
                        3. Introduce 2 friends and family members: Only
                        individuals who you love and trust that has integrity
                        and the capacity to also follow the exact steps as you.
                      </p>
                      <p>
                        NOTE: No random person or underage. Must be 20 years and
                        above to be a member of IFF and participate in our
                        gifting scheme.
                      </p>

                      <a href="authentication.html" style={{ color: "white" }}>
                        <button className="btn1 blue-gradient btn-with-image">
                          <i className="flaticon-login"></i>
                          <i className="flaticon-login"></i>
                          Get Started
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-6">
                <div className="home-facility-item-2 home-image-content pb-30">
                  <img
                    src="./Aila - Online Banking &amp; Payment Processing HTML Template_files/home-facility-bg-2.png"
                    alt="facility"
                    className="scale-one-zero-six"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-quick-contact-section blue-gradient">
        <div className="container-fluid">
          <div className="home-quick-contact home-quick-contact-2">
            <div className="logo-bg-icon">
              <div className="logo-bg-item">
                <img
                  src="./Aila - Online Banking &amp; Payment Processing HTML Template_files/circle.png"
                  alt="icon"
                />
              </div>
              <div className="logo-bg-item">
                <img
                  src="./Aila - Online Banking &amp; Payment Processing HTML Template_files/square.png"
                  alt="icon"
                />
              </div>
            </div>
            <div className="quick-contact-inner">
              <h2>
                20,000 Users Now! <br /> Create Your Own Account To Get Started
              </h2>
              {/* <!-- <p>*We’re willingly is here to answer your question about aila</p> --> */}
              <ul className="section-button">
                <li>
                  <a
                    href="authentication.html"
                    className="btn1 orange-gradient btn-with-image"
                  >
                    <i className="flaticon-agenda"></i>
                    <i className="flaticon-agenda"></i>
                    Get Started
                  </a>
                </li>
                <li>
                  <Link to="contact-us.html">
                    <button className="btn1 btn-with-image">
                      <i className="flaticon-approval"></i>
                      <i className="flaticon-approval"></i>
                      contact us
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="home-client-section p-tb-100 overflow-x-hidden">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <div className="client-details-carousel owl-carousel owl-theme owl-loaded owl-drag">
                <div className="owl-stage-outer">
                  <div
                    className="owl-stage smallSection"
                    // style="transform: translate3d(-3498px, 0px, 0px); transition: all 0s ease 0s; width: 13992px;"
                  >
                    <div
                      className="owl-item animated owl-animated-in fadeIn active"
                      style={{ width: "1166px" }}
                    >
                      <div className="item">
                        <div className="home-client-details-2">
                          <p className="client-caption-para">
                            Since I joined The IFF Family, my life has changed,
                            I am now financially stable, Invest a certain amount
                            of money and in a very little time, I gained every
                            thing back and more… I think That Is awesome.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="owl-item" style={{ width: "1166px" }}>
                      <div className="item">
                        <div className="home-client-details-2">
                          <p className="client-caption-para">
                            A friend introduced me to Integrity Family and
                            Friends and I am very grateful to her. I am a stay
                            at home Mum, I have used the extra income I got From
                            the IFF Platform to set up a small business and its
                            been growing ever since.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="owl-item" style={{ width: "1166px" }}>
                      <div className="item">
                        <div className="home-client-details-2">
                          <p className="client-caption-para">
                            I like IFF Platform because of the good networking
                            capabilities, I get to meet Quality and Interesting
                            people, do business together and grow. It is fun and
                            you get to make an extra income while doing that. I
                            am glad to be part of this growing Platform.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="owl-item" style={{ width: "1166px" }}>
                      <div className="item">
                        <div className="home-client-details-2">
                          <p className="client-caption-para">
                            At first i taught it wasn't legit, but i have sorted
                            alot of my financial need through the help of this
                            wonderful platform, INTEGRITY FAMILY AND FRIENDS
                            Rocks!
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="owl-item" style={{ width: "1166px" }}>
                      <div className="item">
                        <div className="home-client-details-2">
                          <p className="client-caption-para">
                            {" "}
                            Integrity Family And friends(IFF) has helped me and
                            my family a lot and am very happy about this
                            platform. Its legit and Trust Worthy.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="owl-item" style={{ width: "1166px" }}>
                      <div className="item">
                        <div className="home-client-details-2">
                          <p className="client-caption-para">
                            Ever Since i joined i've only had cause to ask for
                            more. I wish i started earlier though. I strongly
                            recommend this innovative and prudent platform for
                            Everyone
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="owl-nav">
                  <button
                    type="button"
                    role="presentation"
                    className="owl-prev"
                  >
                    <span className="flaticon-left-arrow"></span>
                  </button>
                  <button
                    type="button"
                    role="presentation"
                    className="owl-next"
                  >
                    <span className="flaticon-right-arrow"></span>
                  </button>
                </div>
                <div className="owl-dots disabled"></div>
              </div>
            </div>
          </div>
          <div className="home-client-thumbnail-section">
            <div className="client-thumbnail-carousel owl-carousel owl-theme owl-loaded owl-drag">
              <div className="owl-stage-outer">
                <div
                  className="owl-stage smallSection2"
                  //   style="transform: translate3d(0px, 0px, 0px); transition: all 0.2s ease 0s; width: 1749px;"
                >
                  <div
                    className="owl-item current active"
                    style={{ width: "291.5px" }}
                  >
                    <div className="item">
                      <div className="client-thumbnail-content">
                        <div className="client-thumbnail-img">
                          <img
                            src="./Aila - Online Banking &amp; Payment Processing HTML Template_files/client-thumb-1.png"
                            alt="carousel"
                          />
                        </div>
                        <div className="client-thumbnail-info">
                          <h3 className="client-caption-title">Devit Kolin</h3>
                          <h4 className="client-caption-designation">
                            Software Developer
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="owl-item active" style={{ width: "291.5px" }}>
                    <div className="item">
                      <div className="client-thumbnail-content">
                        <div className="client-thumbnail-img">
                          <img
                            src="./Aila - Online Banking &amp; Payment Processing HTML Template_files/client-thumb-2.png"
                            alt="carousel"
                          />
                        </div>
                        <div className="client-thumbnail-info">
                          <h3 className="client-caption-title">Micheal</h3>
                          <h4 className="client-caption-designation">Banker</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="owl-item active" style={{ width: "291.5px" }}>
                    <div className="item">
                      <div className="client-thumbnail-content">
                        <div className="client-thumbnail-img">
                          <img
                            src="./Aila - Online Banking &amp; Payment Processing HTML Template_files/client-thumb-3.png"
                            alt="carousel"
                          />
                        </div>
                        <div className="client-thumbnail-info">
                          <h3 className="client-caption-title"> Emmanuel</h3>
                          <h4 className="client-caption-designation">
                            Lecturer
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="owl-item active" style={{ width: "291.5px" }}>
                    <div className="item">
                      <div className="client-thumbnail-content">
                        <div className="client-thumbnail-img">
                          <img
                            src="./Aila - Online Banking &amp; Payment Processing HTML Template_files/client-thumb-4.png"
                            alt="carousel"
                          />
                        </div>
                        <div className="client-thumbnail-info">
                          <h3 className="client-caption-title">Benson</h3>
                          <h4 className="client-caption-designation">
                            Finance Consultant
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="owl-item" style={{ width: "291.5px" }}>
                    <div className="item">
                      <div className="client-thumbnail-content">
                        <div className="client-thumbnail-img">
                          <img
                            src="./Aila - Online Banking &amp; Payment Processing HTML Template_files/client-thumb-5.png"
                            alt="carousel"
                          />
                        </div>
                        <div className="client-thumbnail-info">
                          <h3 className="client-caption-title">
                            Edward Abraham
                          </h3>
                          <h4 className="client-caption-designation">
                            Fitness Coach
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="owl-item" style={{ width: "291.5px" }}>
                    <div className="item">
                      <div className="client-thumbnail-content">
                        <div className="client-thumbnail-img">
                          <img
                            src="./Aila - Online Banking &amp; Payment Processing HTML Template_files/client-thumb-6.png"
                            alt="carousel"
                          />
                        </div>
                        <div className="client-thumbnail-info">
                          <h3 className="client-caption-title">
                            Anderson James
                          </h3>
                          <h4 className="client-caption-designation">farmer</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="owl-nav disabled">
                <button type="button" role="presentation" className="owl-prev">
                  <span aria-label="Previous">‹</span>
                </button>
                <button type="button" role="presentation" className="owl-next">
                  <span aria-label="Next">›</span>
                </button>
              </div>
              <div className="owl-dots disabled"></div>
            </div>
          </div>
        </div>
      </div>

      <section className="home-download-section-2 pt-100 pb-70">
        <div className="container">
          <div className="home-download-content">
            <div className="row align-items-center">
              <div className="col-sm-12 col-md-12 col-lg-5">
                <div className="home-download-item pb-30">
                  <div className="home-download-image">
                    <img
                      src="./Aila - Online Banking &amp; Payment Processing HTML Template_files/download.png"
                      alt="smartphone"
                    />
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-7">
                <div className="home-download-item pb-30">
                  <div className="home-download-details home-service-start">
                    <h2>Our Pricing</h2>
                    <p>
                      Introduce 2 friends and family members: Only individuals
                      who you love and trust that has integrity and the capacity
                      to also follow the exact steps as you.
                    </p>
                    <div className="download-feature">
                      <div className="download-feature-item">
                        <div
                          className="download-feature-item-inner"
                          style={{ textAlign: "center" }}
                        >
                          <h3>N50,000</h3>
                          <p>
                            Gift a Member in The collection Position N50,000
                          </p>
                        </div>
                      </div>
                      <div className="download-feature-item">
                        <div
                          className="download-feature-item-inner"
                          style={{ textAlign: "center" }}
                        >
                          <h3>4 Members</h3>
                          <p>
                            Get Gifted by 4 Members, When you get to the
                            collection position
                          </p>
                        </div>
                      </div>
                      <div className="download-feature-item">
                        <div
                          className="download-feature-item-inner"
                          style={{ textAlign: "center" }}
                        >
                          <h3>N200,000</h3>
                          <p>Recieve N200,000 Instantly</p>
                        </div>
                      </div>
                    </div>
                    <div className="download-option">
                      <ul className="download-option-list">
                        <li>
                          <a href="#" className="orange-gradient">
                            {/* <!-- <img src="./Aila - Online Banking &amp; Payment Processing HTML Template_files/apple.png"
                                                    alt="apple">
                                                <img src="./Aila - Online Banking &amp; Payment Processing HTML Template_files/apple.png"
                                                    alt="apple"> --> */}
                            <i className="fas fa-chart-line"></i>
                            <i className="fas fa-chart-line"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="blue-gradient">
                            {/* <!-- <img src="./Aila - Online Banking &amp; Payment Processing HTML Template_files/android.png"
                                                    alt="android">
                                                <img src="./Aila - Online Banking &amp; Payment Processing HTML Template_files/android.png"
                                                    alt="android"> --> */}
                            <i className="fas fa-chart-bar"></i>
                            <i className="fas fa-chart-bar"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="home-logo-section-2 border-top-mob">
        <div className="container">
          <div className="section-title">
            <p>Available in over 10+ Countries </p>
          </div>
          <div className="home-logo-content mt-30">
            <div className="home-logo-item">
              <a href="#">
                <img src="assets/images/nigeria.jpg" alt="" />
              </a>
            </div>
            <div className="home-logo-item">
              <a href="#">
                <img src="assets/images/united states.jpg" alt="logo" />
              </a>
            </div>
            <div className="home-logo-item">
              <a href="#">
                <img src="assets/images/canada.jpg" alt="logo" />
              </a>
            </div>
            <div className="home-logo-item">
              <a href="#">
                <img src="assets/images/united kingdom.jpg" alt="logo" />
              </a>
            </div>
            <div className="home-logo-item">
              <a href="#">
                <img src="assets/images/australia.jpg" alt="logo" />
              </a>
            </div>
            <div className="home-logo-item">
              <a href="#">
                <img src="assets/images/germany.jpg" alt="logo" />
              </a>
            </div>
            <div className="home-logo-item">
              <a href="#">
                <img src="assets/images/ghana.png" alt="logo" />
              </a>
            </div>
            <div className="home-logo-item">
              <a href="#">
                <img src="assets/images/italy.jpg" alt="logo" />
              </a>
            </div>
            <div className="home-logo-item">
              <a href="#">
                <img src="assets/images/south africa.jpg" alt="logo" />
              </a>
            </div>
            <div className="home-logo-item">
              <a href="#">
                <img src="assets/images/Netherlands.png" alt="logo" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <script src="./Aila - Online Banking &amp; Payment Processing HTML Template_files/jquery-3.5.1.min.js.download"></script>
      <script src="./Aila - Online Banking &amp; Payment Processing HTML Template_files/bootstrap.bundle.min.js.download"></script>

      <script src="./Aila - Online Banking &amp; Payment Processing HTML Template_files/jquery.magnific-popup.min.js.download"></script>

      <script src="./Aila - Online Banking &amp; Payment Processing HTML Template_files/owl.carousel.min.js.download"></script>

      <script src="./Aila - Online Banking &amp; Payment Processing HTML Template_files/jquery.ajaxchimp.min.js.download"></script>

      <script src="./Aila - Online Banking &amp; Payment Processing HTML Template_files/form-validator.min.js.download"></script>

      <script src="./Aila - Online Banking &amp; Payment Processing HTML Template_files/contact-form-script.js.download"></script>

      <script src="./Aila - Online Banking &amp; Payment Processing HTML Template_files/jquery.meanmenu.min.js.download"></script>

      <script src="./Aila - Online Banking &amp; Payment Processing HTML Template_files/jquery.waypoints.js.download"></script>

      <script src="./Aila - Online Banking &amp; Payment Processing HTML Template_files/counter-up.js.download"></script>

      <script src="./Aila - Online Banking &amp; Payment Processing HTML Template_files/script.js.download"></script>
    </div>
  );
};

export default Index;
