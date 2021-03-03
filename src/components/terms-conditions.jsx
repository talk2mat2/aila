import React from "react";
import Footer from "./Footer";
import NavBar from "./navbar";

const TermsAndCondition = () => {
  return (
    <div>
      <NavBar />
      <header
        className="page-title page-bg "
        style={{
          backgroundImage: `url("./assets/images/terms.png")`,
        }}
      >
        <div className="container">
          <div className="page-title-inner">
            <div className="section-title">
              <h1>Terms & Conditions</h1>
              <ul className="page-breadcrumbs">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>Terms & Conditions</li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <section className="terms-page-section p-tb-100">
        <div className="container">
          <div className="terms-privacy">
            <h3 className="sub-section-title">Our Terms & Conditions</h3>
            <ul className="terms-privacy-list">
              <li>
                <p>
                  This Terms and Conditions and any amendments to the same as
                  would be applicable from time to time, ("Terms and
                  Conditions") constitutes a legally binding financial services
                  end-user license agreement ("Agreement") between "Intergrity
                  Family And Friends (IFF)" incorporated
                </p>
              </li>
              <li>
                <p>
                  <strong>01.</strong>If you do not agree with any of these
                  Terms and Conditions, you must not access the Website. If you
                  access the Website or use the Intergrity Family And
                  Friends(IFF) services, the Terms and Conditions shall be
                  deemed to be legally binding agreement between you and
                  Intergrity Family And Friends(IFF).
                </p>
              </li>
              <li>
                <p>
                  <strong>02.</strong>The Terms and Conditions herein shall
                  apply equally to both the singular and plural form of the
                  terms defined. Whenever the context may require, any pronoun
                  shall include the corresponding masculine and feminine.
                </p>
              </li>
              <li>
                <p>
                  <strong>03.</strong>By using the Website and/or submitting
                  your information including any personal information on the
                  Website, you expressly consent to the transfer of such data to
                  Intergrity Family And Friends(IFF), and to the processing of
                  such data on the server of Intergrity Family And Friends(IFF),
                  where your data will be governed by Applicable Laws.
                </p>
              </li>
            </ul>
            <h3 className="sub-section-title">Changes to the Terms</h3>
            <p>
              Intergrity Family And Friends(IFF) reserves the right to make any
              changes to the Terms and Conditions without any prior notice to
              you. Any changes to the Terms and Conditions shall be communicated
              through posting of updated Terms & conditions on the Website, and
              will only be effective when posted as such. The Website may also
              send emails to the registered user intimating such change. By
              accessing this website, You agree to review the Terms and
              Conditions regularly to understand any changes.
            </p>
            <h3 className="sub-section-title">Additional Terms</h3>
            <p>
              You are above 20 (Twenty) years of age and eligible to enter into
              an agreement and consequently you have the authority to enter into
              this Agreement;
            </p>
            <p>
              Persons under the age of 20 years are not permitted to get engaged
              with this Site and have no permission to call or make inquiries
              for any services
            </p>
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

export default TermsAndCondition;
