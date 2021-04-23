import React, { useState, useEffect } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { useHistory, Link, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { Button, TextField, InputBase } from "@material-ui/core/";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useFormik } from "formik";
import { LOGINSUCCESS } from "../redux/action";
import Button from "@material-ui/core/Button";
import { Scripts } from "./scripts";
// import '../style.css'

import * as Yup from "yup";
// import NavBar from "./navbar";
import styled from "styled-components";
import Register from "./Register";
import NavBar from "./navbar";

const Margin = styled.div`
  height: 80px;
`;
const Listing = styled.ul`
margin-top:20px;
display:flex;
flex-direction:column;
align-items:flex-start;
width:100%;

padding:0px;
width:95%;
li{
	list-style:none;
	font-size:14px;
	width:100%;
	padding-top:3px;
	padding-bottom:3px;
	box-sizing:border-box;
	background-color: #ffff;
	color:grey;
	margin-top:1.7px;
	margin-bottom:1.7px;

}
  input{
    margin-right:20px;
    filter: hue-rotate(200deg) ;
  }
}
`;
const VerifyEmailPage = styled.div`
  min-height: 400px;
`;

// const ProxyUrl = "https://tranquil-headland-58367.herokuapp.com";
const ProxyUrl = process.env.REACT_APP_API_URL;
// const ProxyUrl = "http://localhost:8080";
const axios = require("axios").default;

const Authentication = (props) => {
  const [loginfocused, setloginfocused] = useState(true);
  const [loadingsignup, setLoadingsignup] = useState(false);
  const [loadingVerify, setloadingVerify] = useState(false);
  const [check1, setcheck1] = useState(false);
  const [check2, setcheck2] = useState(false);
  const [check3, setcheck3] = useState(false);
  const [check4, setcheck4] = useState(false);
  const [check5, setcheck5] = useState(false);
  const [ImageState, setImageState] = useState({ file: null, Uri: null });
  const [ImageState2, setImageState2] = useState({ file: null, Uri: null });
  const [loadinglogin, setLoadinglogin] = useState(false);
  const [provideEmail, setProvideEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [provideMobile, setProvideMobile] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const { match } = props;
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
    const Body = document.getElementById("root");
    Scripts.forEach((item) => {
      const script = document.createElement("script");
      script.src = item.src;
      script.async = true;
      Body.appendChild(script);
    });
  }, []);
  useEffect(() => {
    if (CurrentUser && CurrentUser.token) {
      // history.push("MyDashBoard");
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
      mobile: "",
      confirmPassword: "",
      referrerCode: "",
    },
    validationSchema: null, // we passs yup validation object created here
    onSubmit: async (values) => {
      const realValues = {
        ...values,
        Email: String(values.Email).toLowerCase(),
      };
      console.log(values);
      // if (formik.errors) {
      //   return console.log(formik.errors);
      // }
      setLoadingsignup(true);
      await axios
        .post(`${ProxyUrl}/users/register`, realValues)
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
      const realValues = {
        Email: String(values.Email).toLowerCase(),
        Password: values.Password,
      };

      setLoadinglogin(true);
      await axios
        .post(
          `${ProxyUrl}/users/login`,
          // "https://tranquil-headland-58367.herokuapp.com/users/login",

          realValues
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
  const handleVerify = async (e) => {
    if (!check1 || !check3 || !check4 || !check5) {
      return setAlert({
        status: "error",
        isError: true,
        alertMessage: "you must aggree to all IFF terms by selecting all boxes",
      });
    }
    if (!ImageState.file || !ImageState2.file) {
      return setAlert({
        status: "error",
        isError: true,
        alertMessage: "you must provide the images requested",
      });
    }
    if (!provideEmail) {
      return setAlert({
        status: "error",
        isError: true,
        alertMessage: "pls provide a valid email address",
      });
    }
    if (!fullName) {
      return setAlert({
        status: "error",
        isError: true,
        alertMessage: "your full name is requiredr",
      });
    }
    if (!provideMobile) {
      return setAlert({
        status: "error",
        isError: true,
        alertMessage: "pls provide a valid phone number",
      });
    }
    e.preventDefault();

    const image = ImageState.Uri;
    const image2 = ImageState2.Uri;
    if (!image) {
      alert("no image");
      return;
    } else {
      let userInfo = {
        email: String(provideEmail).toLowerCase(),
        mobile: provideMobile,
        fullName,
      };
      setloadingVerify(true);
      var formData = new FormData();
      formData.append("file", image);
      formData.append("file", image2);
      formData.append("userData", JSON.stringify(userInfo));

      //  /users/PreRegister

      await axios({
        // url: `${ProxyUrl}/users/PreRegister`,
        url: `${ProxyUrl}/users/PreRegUpLoad`,
        method: "POST",
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",

          // Authorization: token,
        },
      })
        .then(function (response) {
          console.log(response.data);
          setloadingVerify(false);
          setTimeout(() => {
            history.push("/");
          }, 8000);
          setAlert({
            status: "success",
            isError: true,
            alertMessage: response.data.message,
          });
        })
        .catch(function (error) {
          setloadingVerify(false);
          if (error.response) {
            setAlert({
              status: "error",
              isError: true,
              alertMessage: error.response.data.message,
            });
          }
        });
    }
  };
  function handleChange(event) {
    if (
      event.target.files[0].type === "image/png" ||
      event.target.files[0].type === "image/jpg" ||
      event.target.files[0].type === "image/jpeg"
    ) {
      event.target.files[0] &&
        setImageState({
          file: URL.createObjectURL(event.target.files[0]),
          Uri: event.target.files[0],
        });
    } else {
      return alert("select a valid image format");
    }
  }
  function handleChange2(event) {
    if (
      event.target.files[0].type === "image/png" ||
      event.target.files[0].type === "image/jpg" ||
      event.target.files[0].type === "image/jpeg"
    ) {
      event.target.files[0] &&
        setImageState2({
          file: URL.createObjectURL(event.target.files[0]),
          Uri: event.target.files[0],
        });
    } else {
      return alert("select a valid image format");
    }
  }

  return (
    <div>
      {/* <NavBar/> */}
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
                  <img src="/authentication_files/logo.png" alt="logo" />
                </Link>
                <h1>Welcome to IFF</h1>
              </div>
              <Snackbar
                open={alerts.isError}
                onClose={handleClose}
                autoHideDuration={9000}
                anchorOrigin={{ horizontal: "center", vertical: "top" }}
              >
                <Alert onClose={handleClose} severity={alerts.status}>
                  {alerts.alertMessage}
                </Alert>
              </Snackbar>
              <Switch>
                <Route exact path={`${match.url}/`}>
                  <>
                    <div className="authentication-user-body">
                      <div className="authentication-tab">
                        <div
                          onClick={() => handleSelect()}
                          className={`authentication-tab-item ${
                            loginfocused && "authentication-tab-active"
                          }`}
                          data-authentcation-tab="1"
                        >
                          <img
                            src="./authentication_files/login.png"
                            alt="icon"
                          />
                          Login
                        </div>
                        <div
                          onClick={() => handleSelect()}
                          className={`authentication-tab-item ${
                            !loginfocused && "authentication-tab-active"
                          }`}
                          data-authentcation-tab="2"
                        >
                          <img
                            src="./authentication_files/register.png"
                            alt="icon"
                          />
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
                                    <Link to="/forgotPassword">
                                      Forget password?
                                    </Link>
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
                          <Margin style={{ height: "50px" }} />
                          <Listing>
                            <li>
                              <input
                                onChange={() => {
                                  setcheck1(!check1);
                                }}
                                type="checkbox"
                                checked={check1}
                              ></input>
                              I have read and understood how IFF works
                            </li>
                            {/* <li>
                              {" "}
                              <input
                                onChange={() => {
                                  setcheck2(!check2);
                                }}
                                type="checkbox"
                                checked={check2}
                              ></input>
                              I have a full knowloedge that there is no refund
                            </li> */}
                            <li>
                              {" "}
                              <input
                                onChange={() => {
                                  setcheck3(!check3);
                                }}
                                type="checkbox"
                                checked={check3}
                              ></input>
                              I have a full knowloedge that there is no refund
                              <br />, i agree to this in all totality
                            </li>
                            <li>
                              {" "}
                              <input
                                onChange={() => {
                                  setcheck4(!check4);
                                }}
                                type="checkbox"
                                checked={check4}
                              ></input>
                              I know that i must register my 2 members who has
                              the capacity to register theirs as well for
                              continuity
                            </li>
                            <li>
                              {" "}
                              <input
                                onChange={() => {
                                  setcheck5(!check5);
                                }}
                                type="checkbox"
                                checked={check5}
                              ></input>
                              I fully agree to join and take part in IFF
                              process, i promise to follow the process as set by
                              IFF and its recycling process
                            </li>
                          </Listing>

                          <Margin style={{ height: "10px" }} />
                          <VerifyEmailPage>
                            <span
                              style={{
                                width: "100%",
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-around",
                                marginBottom: "6px",
                              }}
                            >
                              {" "}
                              {ImageState.file && (
                                <img
                                  src={ImageState.file}
                                  alt="preview"
                                  style={{
                                    maxHeight: "80px",
                                    display: "block",
                                    // maxWidth: "80px",
                                  }}
                                />
                              )}
                              {ImageState2.file && (
                                <img
                                  src={ImageState2.file}
                                  alt="preview"
                                  style={{
                                    maxHeight: "80px",
                                    display: "block",
                                    // maxWidth: "80px",
                                  }}
                                />
                              )}
                            </span>
                            <div className="col-sm-12 col-md-12 col-lg-12">
                              <div className="form-group mb-15">
                                <div className="input-group">
                                  <Button variant="contained" component="label">
                                    <small style={{ fontSize: "8px" }}>
                                      select a valid id card image *
                                    </small>
                                    <input
                                      type="file"
                                      hidden
                                      onChange={handleChange}
                                      accept="image/x-png,image/jpeg"
                                    />
                                  </Button>
                                </div>
                              </div>
                            </div>

                            <div className="col-sm-12 col-md-12 col-lg-12">
                              <div className="form-group mb-15">
                                <div className="input-group">
                                  <Button variant="contained" component="label">
                                    <small style={{ fontSize: "8px" }}>
                                      Select a clear picture where you wrote
                                      that you accept all IFF terms and
                                      conditions
                                    </small>
                                    <input
                                      type="file"
                                      hidden
                                      onChange={handleChange2}
                                      accept="image/x-png,image/jpeg"
                                    />
                                  </Button>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-12">
                              <div className="form-group mb-15">
                                <div className="input-group">
                                  <div className="input-group-prepend"></div>
                                  <input
                                    autoComplete="off"
                                    required
                                    maxLength="250"
                                    id="mobile"
                                    name="email"
                                    label="email"
                                    type="text"
                                    className="form-control"
                                    placeholder="Email Address *"
                                    value={provideEmail}
                                    onChange={(e) =>
                                      setProvideEmail(e.target.value)
                                    }
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-12">
                              <div className="form-group mb-15">
                                <div className="input-group">
                                  <div className="input-group-prepend"></div>
                                  <input
                                    required
                                    autoComplete="off"
                                    maxLength="250"
                                    id="fullName"
                                    name="fullName"
                                    label="full name"
                                    type="text"
                                    className="form-control"
                                    placeholder="Full name*"
                                    value={fullName}
                                    onChange={(e) =>
                                      setFullName(e.target.value)
                                    }
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-12">
                              <div className="form-group mb-15">
                                <div className="input-group">
                                  <div className="input-group-prepend"></div>
                                  <input
                                    maxLength="20"
                                    id="mobile"
                                    name="mobile"
                                    autoComplete="off"
                                    label="mobile"
                                    type="text"
                                    onInput={(e) => {
                                      // e.target.value = e.target.value
                                      //   .toString()
                                      //   .slice(0, 13);
                                      if (!/^[0-9,+]+$/.test(e.target.value)) {
                                        return (e.target.value = null);
                                      }
                                    }}
                                    className="form-control"
                                    placeholder="Phone Number*"
                                    value={provideMobile}
                                    onChange={(e) => {
                                      setProvideMobile(e.target.value);
                                    }}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-12">
                              <button
                                onClick={(e) => {
                                  handleVerify(e);
                                }}
                                className="btn1 orange-gradient full-width"
                                style={{ color: "#fff" }}
                              >
                                {loadingVerify ? (
                                  <CircularProgress
                                    size={20}
                                    color="primary"
                                    style={{ color: "white" }}
                                  />
                                ) : (
                                  "   Next"
                                )}
                              </button>
                            </div>
                            <Margin style={{ height: "16px" }} />
                          </VerifyEmailPage>
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
                  </>
                </Route>
                {/* <Route path={`/register`}>
             <Register/>
                  
                </Route> */}
              </Switch>
            </div>
          </div>
        </div>
      </div>
      {/* <script src="./authentication_files/jquery-3.5.1.min.js.download"></script>
      <script src="./authentication_files/bootstrap.bundle.min.js.download"></script>

      <script src="./authentication_files/jquery.magnific-popup.min.js.download"></script>

      <script src="./authentication_files/owl.carousel.min.js.download"></script>

      <script src="./authentication_files/jquery.ajaxchimp.min.js.download"></script>

      <script src="./authentication_files/form-validator.min.js.download"></script>

      <script src="./authentication_files/contact-form-script.js.download"></script>

      <script src="./authentication_files/jquery.meanmenu.min.js.download"></script>

      <script src="./authentication_files/jquery.waypoints.js.download"></script>

      <script src="./authentication_files/counter-up.js.download"></script>

      <script src="./authentication_files/script.js.download"></script> */}
    </div>
  );
};

export default Authentication;
