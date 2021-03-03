import React from "react";
import Footer from "./Footer";
import NavBar from "./navbar";
import { Link } from "react-router-dom";

const Privacypolicy = () => {
  return (
    <div>
      <NavBar />
      <header
        className="page-title page-bg"
        style={{
          backgroundImage: `url("./assets/images/terms.png")`,
        }}
      >
        <div className="container">
          <div className="page-title-inner">
            <div className="section-title">
              <h1>Privacy Policy</h1>
              <ul className="page-breadcrumbs">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <section className="terms-page-section p-tb-100">
        <div className="container">
          <div className="terms-privacy">
            <h3 className="sub-section-title">Our Privacy Policy</h3>
            <p>
              Our Site may use “cookies” to enhance User experience. User’s web
              browser places cookies on their hard drive for record-keeping
              purposes and sometimes to track information about them. User may
              choose to set their web browser to refuse cookies, or to alert you
              when cookies are being sent. If they do so, note that some parts
              of the Site may not function properly. Where you do not want
              information collected through the use of cookies, there is a
              simple procedure in most browsers that allows you to decline the
              use of cookies. To learn more about cookies, please visit
              http://www.allaboutcookies.org/.
            </p>
            <h3 className="sub-section-title">
              How We Collect and Use Information
            </h3>
            z
            <ul className="terms-privacy-list">
              <li>
                <p>
                  We may collect and use Users personal information for the
                  following purposes:
                  <br />
                  <br />
                  To run and operate our Site-We may need your information to
                  display content on the Site correctly. To improve customer
                  service-Information you provide helps us respond to your
                  customer service requests and support needs more efficiently.
                  To personalize user experience-We may use information in the
                  aggregate to understand how our Users as a group use the
                  services and resources provided on our Site. To improve our
                  Site-We may use feedback you provide to improve our products
                  and services. To process payments-We may use the information
                  Users provide about themselves when placing an order only to
                  provide service to that order. We do not share this
                  information with outside parties except to the extent
                  necessary to provide the service. To send periodic emails-We
                  may use the email address to send User information and updates
                  pertaining to their order. It may also be used to respond to
                  their inquiries, questions, and/or other requests..
                </p>
              </li>

              <h3 className="sub-section-title">Additional Policy</h3>
              <p>
                By using this Site, you signify your acceptance of this policy.
                If you do not agree to this policy, please do not use our Site.
                Your continued use of the Site following the posting of changes
                to this policy will be deemed your acceptance of those changes.
              </p>
              <p>
                Note that you can withdraw your consent at any time, however
                such withdrawal of consent would not affect the lawfulness of
                processing information based on consent given before its
                withdrawal.
              </p>
            </ul>
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
      <Footer />;
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

export default Privacypolicy;
