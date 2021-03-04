import React from "react";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div>
      <div class="error-page-section">
        <div class="container">
          <div class="error-page-inner">
            <h1>404</h1>
            <h3>Oops! Page Not Found</h3>
            <p>The page you were looking for could not be found.</p>
            <Link to="/" class="btn1 btn-with-image orange-gradient">
              <i class="flaticon-login"></i>
              <i class="flaticon-login"></i>
              Return To Homepage
            </Link>
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

export default Page404;
