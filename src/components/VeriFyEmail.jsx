import React from 'react';
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

const VeriFyEmail = () => {
  
  
    const ProxyUrl = process.env.REACT_APP_API_URL
    const [alerts, setAlert] = React.useState({
        status: "",
        isError: false,
        alertMessage: "",
      });
const history= useHistory()
function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
const handleClose = () => {
    setAlert({ isError: false, errorMessage: "" });
  };
  const verifyEmail= async()=>{
    await axios
    .get(
      `${ProxyUrl}/users/verifyEmail/${history.location.search}`,
    )
    .then(function (response) {
      console.log(response.data);
    //   setloadingVerify(false)
   setTimeout(() => {
    history.push({pathname:'/register',state:{email:response.data.userData.email}})
   },6000);
      setAlert({
        status: "success",
        isError: true,
        alertMessage: response.data.message,
      });
    })
    .catch(function (error) {
    //   setloadingVerify(false)
    //   if (error.response) {
        setAlert({
          status: "error",
          isError: true,
          alertMessage: error.response.data.message,
        });
    //   }
    })
}
    React.useEffect(()=>{console.log(history.location.search)

verifyEmail()
    },[])
    return ( <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>  <Snackbar
    open={alerts.isError}
    onClose={handleClose}
    autoHideDuration={6000}
    anchorOrigin={{ horizontal: "center", vertical: "top" }}
  >
    <Alert onClose={handleClose} severity={alerts.status}>
      {alerts.alertMessage}
    </Alert>
  </Snackbar> 
  <h2 style={{marginTop:'100px'}}>verifying email...</h2><br/><small>you will be redirected to after successfull verification</small>
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
  </div>);
}
 
export default VeriFyEmail;