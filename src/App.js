import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
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

function App() {
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
  return (
    <Router>
      <React.Fragment>
        <Switch>
          <Route exact path="/">
            <Index />
          </Route>

          <Route exact path="/terms">
            <TermsAndCondition />
          </Route>
          <Route exact path="/users">
            <Authentication />
          </Route>
          {CurrentUser && (
            <Route exact path="/MyDashBoard">
              <DashBoard />
            </Route>
          )}
          <Route exact path="/ContactUs">
            <Contactus />
          </Route>
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
    </Router>
  );
}

export default App;
