import React from "react";
import { Link } from "react-router-dom";

const Forgetpassword = () => {
  return (
    <div>
      <div className="authentication-section">
        <div className="authentication-grid authentication-grid-lost">
          <div className="authentication-item authentication-img-bg"></div>
          <div className="authentication-item bg-white">
            <div className="authentication-user-panel">
              <div className="authentication-user-header">
                <Link to="/">
                  <img src="assets/images/logo.png" alt="logo" />
                </Link>
              </div>
              <div className="authentication-user-body">
                <p className="mt-40">
                  Lost your password? Please enter your username or email
                  address. You will receive a link to create a new password via
                  email.
                </p>
                <div className="authentication-form">
                  <form>
                    <div className="row">
                      <div className="col-sm-12 col-md-12 col-lg-12">
                        <div className="input-area mb-15">
                          <label className="input-label-icon">
                            <span>
                              <i className="flaticon-user"></i>
                            </span>
                          </label>
                          <input
                            type="text"
                            className="input-full"
                            placeholder="User Name Or Email Address *"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-12 col-lg-12">
                        <button className="btn1 orange-gradient full-width">
                          Reset Password
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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

export default Forgetpassword;
