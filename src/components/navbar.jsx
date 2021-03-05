import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import SettingsIcon from "@material-ui/icons/Settings";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { LOGINOUTUSER } from "../redux/action";

// import { Link } from "react-router-dom";
const NavBar = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const history = useHistory();
  const dispatch = useDispatch();
  const userdata =
    (currentUser && currentUser.token && currentUser.userdata) || {};

  const handleLogout = () => {
    dispatch(LOGINOUTUSER());
    history.push("/");
  };
  return (
    <div className="fixed-top">
      <div className="navbar-area">
        <div className="mobile-nav">
          <Link className="logo" to="/">
            <img src="assets/images/logo.png" alt="logo" />
          </Link>
          <div className="navbar-option">
            <div className="navbar-option-item dropdown nav-language-option"></div>
          </div>
        </div>

        <div className="main-nav">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-md navbar-light">
              <Link className="navbar-brand" to="/">
                <img src="assets/images/logo.png" alt="logo" />
              </Link>
              <div
                className="collapse navbar-collapse mean-menu"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mx-auto">
                  <li className="nav-item">
                    <Link to="/" className="nav-link">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/AboutUs">
                      About Us
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/Features">
                      Features
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-item" to="FAQS">
                      FAQ's
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/ContactUs" className="nav-link ">
                      Contact Us
                    </Link>
                  </li>

                  {currentUser ? (
                    <>
                      {" "}
                      <li className="nav-item User-UserColapsible">
                        <Link to="/MyDashBoard" className="nav-link ">
                          My Profile
                        </Link>
                      </li>
                      <li className="nav-item User-UserColapsible"></li>
                    </>
                  ) : null}
                  {currentUser ? (
                    <li className="nav-item User-UserColapsible">
                      <Link to="/logout">
                        <span>LogOut</span>
                      </Link>
                    </li>
                  ) : (
                    <li className="nav-item User-UserColapsible">
                      <Link to="/users" className="nav-link ">
                        Login / Sign Up
                      </Link>
                    </li>
                  )}
                </ul>
              </div>

              {!currentUser ? (
                <div className="navbar-option">
                  <div className="navbar-option-item dropdown nav-language-option"></div>
                  <div className="navbar-option-item">
                    {/* <a
                      href="authentication.html"
                      className="btn1 blue-gradient btn-with-image text-nowrap"
                    >
                      <i className="flaticon-login"></i>
                      <i className="flaticon-login"></i>
                      Sign Up / Login
                    </a> */}
                    <Link
                      to="/users"
                      className="btn1 blue-gradient btn-with-image text-nowrap"
                    >
                      <i className="flaticon-login"></i>
                      <i className="flaticon-login"></i>
                      Sign Up / Login
                    </Link>
                  </div>
                </div>
              ) : (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    minWidth: "150px",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Link to="/MyDashBoard">
                    <PermIdentityIcon fontSize="medium" color="grey" />
                  </Link>
                  <small>
                    Welcome <br />
                    {userdata.fullName && userdata.fullName.length > 14
                      ? userdata.fullName.slice(0, 14) + "..."
                      : userdata.fullName}
                  </small>
                  <p
                    id="logOut"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      handleLogout();
                    }}
                  >
                    <span class="tooltiptext">logout</span>
                    <PowerSettingsNewIcon fontSize="medium" id="logOut" />
                  </p>
                </div>
              )}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
