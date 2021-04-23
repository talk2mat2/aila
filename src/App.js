import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useParams,
} from "react-router-dom";

import Index from "./components";
import Page404 from "./components/404";
import Aboutus from "./components/about-us";
import Authentication from "./components/authentication";
import Contactus from "./components/contact-us";
import DashBoard from "./components/dashboard";
import Faqs from "./components/Faqs";
import Forgetpassword from "./components/forget-password";
import Privacypolicy from "./components/privacy-policy";
import TermsAndCondition from "./components/terms-conditions";
import Features from "./components/features";
import { LOGINOUTUSER } from "./redux/action";
import VeriFyEmail from "./components/VeriFyEmail";
import Register from "./components/Register";
import "./style.css";
import "./responsive.css";
import "./cssmedia/css/animate.min.css";
import "./cssmedia/css/bootstrap.min.css";
import "./cssmedia/css/boxicons.min.css";
//  import './cssmedia/css/flaticon.css'
import "./cssmedia/css/line-awesome.min.css";
// import './cssmedia/css/magnific-popup.min.css'
// import './cssmedia/css/meanmenu.min.css'
import "./cssmedia/css/owl.carousel.min.css";
import "./cssmedia/css/owl.theme.default.min.css";
import NavBar from "./components/navbar";
import AdminDashBoard from "./components/AdminDashBoard";

function App(props) {
  const dispatch = useDispatch();

  const LogOut = () => {
    const history = useHistory();
    useEffect(() => {
      dispatch(LOGINOUTUSER());
      history.push("/");
    }, []);
    return <></>;
  };
  const CurrentUser = useSelector((state) => state.user.currentUser);
  const userdata = CurrentUser && CurrentUser.userdata;
  // useEffect(() => {
  //   CurrentUser && SelfDestructT(userdata);
  // }, [userdata]);

  const history = useHistory();
  useEffect(() => {
    console.log(history);
    if (history.location.pathname === "/users/verifyEmail/") {
      console.log("verifyingf");
    }
    // === "/confirm/:confirmationCode"
  });

  // const SelfDestructT = (user) => {
  //   console.log(user);
  //   if (user && user.downLiners.length > 3 && !user.isAdmin) {
  //     let completed = 0;
  //     user.downLiners.forEach((givers) => {
  //       if (givers.paymentStatus === true) {
  //         completed += 1;
  //         console.log(givers);
  //       }
  //     });
  //     console.log(completed);
  //     if (completed === 4) {
  //       dispatch(LOGINOUTUSER());
  //     }
  //   }
  // };

  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Index />
        </Route>

        <Route exact path="/terms">
          <TermsAndCondition />
        </Route>
        <Route
          path="/users"
          component={CurrentUser ? DashBoard : Authentication}
        />
        {/* <Authentication />
          </Route> */}
        <Route exact path="/verifyEmail/">
          <>
            {" "}
            <VeriFyEmail />
          </>
        </Route>
        <Route path="/register">
          <Register />
        </Route>

        {CurrentUser && (
          <Route exact path="/MyDashBoard">
            <DashBoard />
          </Route>
        )}
        <Route exact path="/ContactUs">
          <Contactus />
        </Route>
        {userdata && userdata.isAdmin ? (
          <Route exact path="/Admin">
            <AdminDashBoard />
          </Route>
        ) : null}
        <Route exact path="/PrivacyPolicies">
          <Privacypolicy />
        </Route>
        <Route exact path="/forgotPassword">
          <Forgetpassword />
        </Route>
        <Route exact path="/AboutUs">
          <Aboutus />
        </Route>
        <Route exact path="/FAQS">
          <Faqs />
        </Route>
        <Route exact path="/Features">
          <Features />
        </Route>
        <Route path="/logout">
          <LogOut />
        </Route>
        <Route>
          <Page404 />
        </Route>
        {/* <Authentication /> */}
        {/* <DashBoard/> */}
        {/* <Contactus /> */}
        {/* <Privacypolicy /> */}
        {/* <Forgetpassword /> */}
        {/* <Aboutus /> */}
        {/* <Page404 /> */}
        {/* <Faqs /> */}
      </Switch>
    </React.Fragment>
  );
}

export default App;
