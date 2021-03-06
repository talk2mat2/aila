import React, { useState, useEffect } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { useHistory, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { Button, TextField, InputBase } from "@material-ui/core/";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useFormik } from "formik";
import { LOGINSUCCESS } from "../redux/action";

import * as Yup from "yup";
// import NavBar from "./navbar";
import styled from "styled-components";

const Margin = styled.div`
  height: 80px;
`;
const ProxyUrl = "https://tranquil-headland-58367.herokuapp.com";
const axios = require("axios").default;

const Authentication = () => {
  const [loginfocused, setloginfocused] = useState(true);
  const [loadingsignup, setLoadingsignup] = useState(false);
  const [loadinglogin, setLoadinglogin] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const CurrentUser = useSelector((state) => state.user.currentUser);
  const [alerts, setAlert] = useState({
    status: "",
    isError: false,
    alertMessage: "",
  });
  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  useEffect(() => {
    if (CurrentUser && CurrentUser.token) {
      history.push("MyDashBoard");
      // console.log(CurrentUser);
    }
  });
  const handleSelect = () => {
    setloginfocused(!loginfocused);
  };
  const handleClose = () => {
    setAlert({ isError: false, errorMessage: "" });
  };
  // const regSchema = Yup.object().shape({
  //   email: Yup.string()
  //     .label("Email")
  //     .email("pls enter a valid email")
  //     .required("email is reqired"),
  //   password: Yup.string().label("Password").min(6).required(),
  // });
  const formik = useFormik({
    initialValues: {
      fullName: "",
      Email: "",
      Password: "",
      confirmPassword: "",
      referrerCode: "",
    },
    validationSchema: null, // we passs yup validation object created here
    onSubmit: async (values) => {
      console.log(values);
      // if (formik.errors) {
      //   return console.log(formik.errors);
      // }
      setLoadingsignup(true);
      await axios
        .post(`${ProxyUrl}/users/register`, values)
        .then(function (response) {
          console.log(response);
          setLoadingsignup(false);
          setAlert({
            status: "success",
            isError: true,
            alertMessage: response.data.message,
          });
        })
        .catch(function (error) {
          setLoadingsignup(false);
          if (error.response) {
            setAlert({
              status: "error",
              isError: true,
              alertMessage: error.response.data.message,
            });
          }
        });
    },
  });

  const formiklogin = useFormik({
    initialValues: {
      Email: "",
      Password: "",
    },
    validationSchema: null, // we passs yup validation object created here
    onSubmit: async (values) => {
      setLoadinglogin(true);
      await axios
        .post(
          `${ProxyUrl}/users/login`,
          // "https://tranquil-headland-58367.herokuapp.com/users/login",

          values
        )
        .then(function (response) {
          console.log(response.data);
          dispatch(LOGINSUCCESS(response.data));
          setLoadinglogin(false);
        })
        .catch(function (error) {
          setLoadinglogin(false);
          if (error.response) {
            setAlert({
              status: "error",
              isError: true,
              alertMessage: error.response.data.message,
            });
          }
        });
      // alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div>
      <Margin />
      <div
        className="authentication-section"
        style={{
          backgroundImage: `url("./assets/images/authentication-bg.png")`,
        }}
      >
        <div className="authentication-grid">
          <div className="authentication-item authentication-img-bg"></div>
          <div className="authentication-item bg-white pl-15 pr-15">
            <div className="authentication-user-panel">
              <div
                className="authentication-user-header"
                style={{ marginTop: "30px" }}
              >
                <Link to="/">
                  <img src="./authentication_files/logo.png" alt="logo" />
                </Link>
                <h1>Welcome to IFF</h1>
              </div>
              <Snackbar
                open={alerts.isError}
                onClose={handleClose}
                autoHideDuration={6000}
                anchorOrigin={{ horizontal: "center", vertical: "top" }}
              >
                <Alert onClose={handleClose} severity={alerts.status}>
                  {alerts.alertMessage}
                </Alert>
              </Snackbar>
              <div className="authentication-user-body">
                <div className="authentication-tab">
                  <div
                    onClick={() => handleSelect()}
                    className={`authentication-tab-item ${
                      loginfocused && "authentication-tab-active"
                    }`}
                    data-authentcation-tab="1"
                  >
                    <img src="./authentication_files/login.png" alt="icon" />
                    Login
                  </div>
                  <div
                    onClick={() => handleSelect()}
                    className={`authentication-tab-item ${
                      !loginfocused && "authentication-tab-active"
                    }`}
                    data-authentcation-tab="2"
                  >
                    <img src="./authentication_files/register.png" alt="icon" />
                    Register
                  </div>
                </div>
                <div className="authentication-tab-details">
                  <div
                    className={`authentication-tab-details-item ${
                      loginfocused && "authentication-tab-details-active"
                    }`}
                    // className="authentication-tab-details-item authentication-tab-details-active"
                    data-authentcation-details="1"
                  >
                    <div className="authentication-form">
                      <form autoComplete="false">
                        <div className="row">
                          <div className="col-sm-12 col-md-12 col-lg-12">
                            <div className="form-group mb-15">
                              <div className="input-group">
                                <div className="input-group-prepend"></div>
                                <input
                                  type="email"
                                  className="form-control"
                                  placeholder=" Email Address *"
                                  required
                                  id="Email"
                                  name="Email"
                                  label="Email"
                                  value={formiklogin.values.Email}
                                  onChange={formiklogin.handleChange}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-12 col-md-12 col-lg-12">
                            <div className="form-group mb-15">
                              <div className="input-group">
                                <div className="input-group-prepend"></div>
                                <input
                                  type="password"
                                  className="form-control"
                                  placeholder="Password"
                                  required
                                  id="Password"
                                  name="Password"
                                  label="Password"
                                  value={formiklogin.values.Password}
                                  onChange={formiklogin.handleChange}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-12 col-md-12 col-lg-12">
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                formiklogin.handleSubmit();
                              }}
                              className="btn1 orange-gradient full-width"
                            >
                              {loadinglogin ? (
                                <CircularProgress
                                  size={20}
                                  color="primary"
                                  style={{ color: "white" }}
                                />
                              ) : (
                                "Login"
                              )}
                            </button>
                          </div>
                        </div>
                        <div className="authentication-account-access mt-20">
                          <div className="authentication-account-access-item">
                            <div className="">
                              <input type="checkbox" id="remember" />
                              <label for="remember">Remember me</label>
                            </div>
                          </div>
                          <div className="authentication-account-access-item">
                            <div className="authentication-link">
                              <Link to="/forgotPassword">Forget password?</Link>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                    {/* <div className="authentication-divider mt-20">
                      <span>Or Login With</span>
                    </div> */}
                    {/* <div className="authentication-social-access mt-10">
                      <div className="authentication-social-item social-btn social-btn-fb mt-10">
                        <a href="authentication.html#">Facebook</a>
                      </div>
                      <div className="authentication-social-item social-btn social-btn-tw mt-10">
                        <a href="authentication.html#">Twitter</a>
                      </div>
                      <div className="authentication-social-item social-btn social-btn-ld mt-10">
                        <a href="authentication.html#">Linkedin</a>
                      </div>
                    </div> */}
                  </div>

                  <div
                    className={`authentication-tab-details-item ${
                      !loginfocused && "authentication-tab-details-active"
                    }`}
                    // className="authentication-tab-details-item"
                    data-authentcation-details="2"
                  >
                    <div className="authentication-form">
                      <form autoComplete="off">
                        <div className="row">
                          <div className="col-sm-12 col-md-12 col-lg-12">
                            <div className="form-group mb-15">
                              <div className="input-group">
                                <div className="input-group-prepend"></div>
                                <input
                                  maxLength="25"
                                  id="fullName"
                                  name="fullName"
                                  label="fullName"
                                  type="text"
                                  className="form-control"
                                  placeholder="Full Name*"
                                  required
                                  value={formik.values.fullName}
                                  onChange={formik.handleChange}
                                />
                              </div>
                            </div>
                          </div>

                          <div className="col-sm-12 col-md-12 col-lg-12">
                            <div className="form-group mb-15">
                              <div className="input-group">
                                <div className="input-group-prepend"></div>
                                <input
                                  id="Email"
                                  name="Email"
                                  label="Email"
                                  autoComplete="false"
                                  type="Email"
                                  className="form-control"
                                  placeholder="Email Address *"
                                  required
                                  value={formik.values.Email}
                                  onChange={formik.handleChange}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-12 col-md-12 col-lg-12">
                            <div className="form-group mb-15">
                              <div className="input-group">
                                <div className="input-group-prepend"></div>
                                <input
                                  id="password"
                                  name="Password"
                                  label="Password"
                                  type="Password"
                                  className="form-control"
                                  placeholder="Password *"
                                  required
                                  value={formik.values.Password}
                                  onChange={formik.handleChange}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-12 col-md-12 col-lg-12">
                            <div className="form-group mb-15">
                              <div className="input-group">
                                <div className="input-group-prepend"></div>
                                <input
                                  id="confirmPassword"
                                  name="confirmPassword"
                                  label="Confrim Password"
                                  type="password"
                                  className="form-control"
                                  placeholder="Confirm Password *"
                                  required
                                  value={formik.values.confirmPassword}
                                  onChange={formik.handleChange}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-12 col-md-12 col-lg-12">
                            <div className="form-group mb-15">
                              <div className="input-group">
                                <div className="input-group-prepend"></div>
                                <input
                                  maxLength="10"
                                  id="referrerCode"
                                  name="referrerCode"
                                  label="referrerCode"
                                  type="text"
                                  className="form-control"
                                  placeholder="Referrer Code ?"
                                  value={formik.values.referrerCode}
                                  onChange={formik.handleChange}
                                />
                              </div>
                            </div>
                          </div>

                          <div className="col-sm-12 col-md-12 col-lg-12">
                            <button
                              onClick={(e) => {
                                e.preventDefault();

                                formik.handleSubmit();
                              }}
                              className="btn1 orange-gradient full-width"
                            >
                              {loadingsignup ? (
                                <CircularProgress
                                  size={20}
                                  color="primary"
                                  style={{ color: "white" }}
                                />
                              ) : (
                                "   Sign Up"
                              )}
                            </button>
                          </div>
                        </div>
                        <div className="authentication-account-access mt-20">
                          <div className="authentication-account-access-item">
                            <div className="">
                              <input type="checkbox" id="newsletter" />
                              <label for="newsletter">
                                Click here to get newsletter
                              </label>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                    {/* <div className="authentication-divider mt-60">
                      <span>Or Sign Up With</span>
                    </div>
                    <div className="authentication-social-access mt-10">
                      <div className="authentication-social-item social-btn social-btn-fb mt-10">
                        <a href="authentication.html#">Facebook</a>
                      </div>
                      <div className="authentication-social-item social-btn social-btn-tw mt-10">
                        <a href="authentication.html#">Twitter</a>
                      </div>
                      <div className="authentication-social-item social-btn social-btn-ld mt-10">
                        <a href="authentication.html#">Linkedin</a>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <script src="./authentication_files/jquery-3.5.1.min.js.download"></script>
      <script src="./authentication_files/bootstrap.bundle.min.js.download"></script>

      <script src="./authentication_files/jquery.magnific-popup.min.js.download"></script>

      <script src="./authentication_files/owl.carousel.min.js.download"></script>

      <script src="./authentication_files/jquery.ajaxchimp.min.js.download"></script>

      <script src="./authentication_files/form-validator.min.js.download"></script>

      <script src="./authentication_files/contact-form-script.js.download"></script>

      <script src="./authentication_files/jquery.meanmenu.min.js.download"></script>

      <script src="./authentication_files/jquery.waypoints.js.download"></script>

      <script src="./authentication_files/counter-up.js.download"></script>

      <script src="./authentication_files/script.js.download"></script>
    </div>
  );
};

export default Authentication;
