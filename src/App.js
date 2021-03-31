import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useParams
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
import './style.css'
import './responsive.css'



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
  useEffect(() => {
    CurrentUser && SelfDestructT(userdata);
  }, [userdata]);



const history= useHistory()
  useEffect(()=>{
    console.log(history)
    if(history.location.pathname==="/users/verifyEmail/"){
      console.log('verifyingf')
    }
    // === "/confirm/:confirmationCode"
  })

  const SelfDestructT = (user) => {
    console.log(user);
    if (user && user.downLiners.length > 3) {
      let completed = 0;
      user.downLiners.forEach((givers) => {
        if (givers.paymentStatus === true) {
          completed += 1;
          console.log(givers);
        }
      });
      console.log(completed);
      if (completed === 4) {
        dispatch(LOGINOUTUSER());
      }
    }
  };

  return (
 
      <React.Fragment>
        <Switch>
          <Route exact path="/">
            <Index />
          </Route>

          <Route exact path="/terms">
            <TermsAndCondition />
          </Route>
          <Route  path="/users" component={Authentication}/>
            {/* <Authentication />
          </Route> */}
          <Route  path="/verifyEmail">
          <VeriFyEmail/>
          </Route>
          <Route  path="/register">
          <Register/>
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
   
  );
}

export default App;
