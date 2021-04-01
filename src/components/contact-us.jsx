import React from "react";
import Footer from "./Footer";
import NavBar from "./navbar";

const Contactus = () => {
  return (
    <div>
      {/* <NavBar /> */}
      <header
        className="page-title page-bg"
        style={{
          backgroundImage: `url("./assets/images/contact-us-bg.png")`,
        }}
      >
        <div className="container">
          <div className="page-title-inner">
            <div className="section-title">
              <h1>Contact Us</h1>
              <ul className="page-breadcrumbs">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>Contact us</li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <section className="contact-address-section pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="box-card fluid-height">
                <div className="box-card-inner full-height">
                  <div className="box-card-icon mb-25">
                    <img src="assets/images/address.png" alt="icon" />
                  </div>
                  <div className="box-card-details">
                    <h3 className="box-card-title mb-20">Address</h3>
                    <p className="box-card-para">
                      456 Labisto Parkways, CA, United States
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="box-card fluid-height">
                <div className="box-card-inner full-height">
                  <div className="box-card-icon mb-25">
                    <img src="assets/images/email.png" alt="icon" />
                  </div>
                  <div className="box-card-details">
                    <h3 className="box-card-title mb-20">Email</h3>
                    <p className="box-card-para">
                      <a
                        className="link-us"
                        href="https://templates.hibootstrap.com/cdn-cgi/l/email-protection#036a6d656c43626f6a622d606c6e"
                      >
                        <span
                          className="__cf_email__"
                          data-cfemail="aec7c0c8c1eecfc2c7cf80cdc1c3"
                        >
                          [email&#160;protected]
                        </span>
                      </a>
                    </p>
                    <p className="box-card-para">
                      <a
                        className="link-us"
                        href="https://templates.hibootstrap.com/cdn-cgi/l/email-protection#98ebede8e8f7eaecd8f9f4f1f9b6fbf7f5"
                      >
                        <span
                          className="__cf_email__"
                          data-cfemail="9feceaefeff0edebdffef3f6feb1fcf0f2"
                        >
                          [email&#160;protected]
                        </span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 offset-md-3 offset-lg-0">
              <div className="box-card fluid-height">
                <div className="box-card-inner full-height">
                  <div className="box-card-icon mb-25">
                    <img src="assets/images/contact-phone.png" alt="icon" />
                  </div>
                  <div className="box-card-details">
                    <h3 className="box-card-title mb-20">Phone</h3>
                    <p className="box-card-para">
                      <a className="link-us" href="tel:(+00)67834598">
                        (+00) 678 345 98
                      </a>
                    </p>
                    <p className="box-card-para">+(456) 332-897-234</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-comment-section bg-off-white pt-100 pb-70">
        <div className="container">
          <div className="home-facility-content">
            <div className="row align-items-end">
              <div className="col-sm-12 col-md-12 col-lg-5">
                <div className="home-facility-image">
                  <div className="home-facility-item faq-block-image pb-30">
                    <img
                      src="assets/images/contact-comment.png"
                      alt="comment"
                    />
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-7">
                <div className="home-facility-item pb-30">
                  <div className="blog-comment-leave-area contact-comment-leave-area">
                    <h3 className="sub-section-title">Leave a message</h3>
                    <div className="blog-comment-input-area mt-40">
                      <form id="contactForm">
                        <div className="row">
                          <div className="col-sm-12 col-md-6 col-lg-6">
                            <div className="form-group mb-30">
                              <div className="input-group">
                                <div className="input-group-prepend">
                                  <span className="input-group-text">
                                    <i className="flaticon-user"></i>
                                  </span>
                                </div>
                                <input
                                  type="text"
                                  name="name"
                                  id="name"
                                  className="form-control"
                                  required
                                  data-error="Please enter your name"
                                  placeholder="Name*"
                                />
                              </div>
                              <div className="help-block with-errors"></div>
                            </div>
                          </div>
                          <div className="col-sm-12 col-md-6 col-lg-6">
                            <div className="form-group mb-30">
                              <div className="input-group">
                                <div className="input-group-prepend">
                                  <span className="input-group-text">
                                    <i className="flaticon-user"></i>
                                  </span>
                                </div>
                                <input
                                  type="email"
                                  name="email"
                                  id="email"
                                  className="form-control"
                                  required
                                  data-error="Please enter your email"
                                  placeholder="Email*"
                                />
                              </div>
                              <div className="help-block with-errors"></div>
                            </div>
                          </div>
                          <div className="col-sm-12 col-md-6 col-lg-6">
                            <div className="form-group mb-30">
                              <div className="input-group">
                                <div className="input-group-prepend">
                                  <span className="input-group-text">
                                    <i className="flaticon-phone-call"></i>
                                  </span>
                                </div>
                                <input
                                  type="text"
                                  name="phone_number"
                                  id="phone_number"
                                  required
                                  data-error="Please enter your phone number"
                                  className="form-control"
                                  placeholder="Phone*"
                                />
                              </div>
                              <div className="help-block with-errors"></div>
                            </div>
                          </div>
                          <div className="col-sm-12 col-md-6 col-lg-6">
                            <div className="form-group mb-30">
                              <div className="input-group">
                                <div className="input-group-prepend">
                                  <span className="input-group-text">
                                    <i className="flaticon-book"></i>
                                  </span>
                                </div>
                                <input
                                  type="text"
                                  name="msg_subject"
                                  id="msg_subject"
                                  className="form-control"
                                  required
                                  data-error="Please enter your subject"
                                  placeholder="Subject*"
                                />
                              </div>
                              <div className="help-block with-errors"></div>
                            </div>
                          </div>
                          <div className="col-sm-12 col-md-12 col-lg-12">
                            <div className="form-group mb-30">
                              <div className="input-group">
                                <div className="input-group-prepend">
                                  <span className="input-group-text">
                                    <i className="flaticon-email"></i>
                                  </span>
                                </div>
                                <textarea
                                  name="message"
                                  className="form-control"
                                  id="message"
                                  rows="5"
                                  required
                                  data-error="Write your message"
                                  placeholder="Your Message*"
                                ></textarea>
                              </div>
                              <div className="help-block with-errors"></div>
                            </div>
                          </div>
                          <div className="col-sm-12 col-md-12 col-lg-12">
                            <button
                              className="btn1 orange-gradient btn-with-image"
                              type="submit"
                            >
                              <i className="flaticon-login"></i>
                              <i className="flaticon-login"></i>
                              Send A Message
                            </button>
                            <div id="msgSubmit"></div>
                            <div className="clearfix"></div>
                          </div>
                        </div>
                      </form>
                    </div>
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
            <h2>20,000 Users now! Create Your Own Account to get started</h2>
            <ul className="section-button">
              <li>
                <a
                  href="authentication.html"
                  className="btn1 orange-gradient btn-with-image"
                >
                  <i className="flaticon-agenda"></i>
                  <i className="flaticon-agenda"></i>
                  Create Your Account
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
      <script
        data-cfasync="false"
        src="../../cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"
      ></script>
      <script src="assets/js/jquery-3.5.1.min.js"></script>
      <script src="assets/js/bootstrap.bundle.min.js"></script>

      <script src="assets/js/jquery.magnific-popup.min.js"></script>

      <script src="assets/js/owl.carousel.min.js"></script>

      <script src="assets/js/jquery.ajaxchimp.min.js"></script>

      <script src="assets/js/form-validator.min.js"></script>

      <script src="assets/js/contact-form-script.js"></script>

      <script src="assets/js/jquery.meanmenu.min.js"></script>

      <script src="assets/js/jquery.waypoints.js"></script>

      <script src="assets/js/counter-up.js"></script>

      <script src="assets/js/script.js"></script>
    </div>
  );
};

export default Contactus;
