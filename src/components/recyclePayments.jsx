import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import axios from "axios";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useSelector, useDispatch } from "react-redux";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { SYNCUSERDATA } from "../redux/action";

import Menu from "@material-ui/core/Menu";

const Main = styled.div`
  min-height: 95vh;
  background-color: #f1f0f0;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding-bottom: 30px;
`;
const UsersHeader = styled.div`
  min-height: 98vh;
  width: 98%;
  background-color: #ffff;
  background-image: linear-gradient(to right, #fdfcfb, #e2d1c3);

  // background-image: linear-gradient(to-right,#fdfbfb , #ebedee);
  padding: 10px;
  display: flex;
  flex-direction: column;

  align-items: center;
`;

const BigText = styled.p`
  color: grey;
  font-size: 20px;
`;
const MediumText = styled.p`
  color: grey;
  font-size: 14px;
  font-weight: 700;
`;

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, email, mobile, idcard, icon) {
  //   console.log(item);

  return { name, email, mobile, idcard, icon };
}

const options = ["cancel", "Confirm Payment Received"];
const RecyclePayments = () => {
  const [pageNo, setPageNo] = React.useState(0);
  const [fetchingData, setfetchingData] = React.useState(false);
  const [ListResult, setListResult] = React.useState([]);
  const [totalCount, setTotalCount] = React.useState(0);
  const ProxyUrl = process.env.REACT_APP_API_URL;
  const currentUser = useSelector((state) => state.user.currentUser);
  const token = currentUser && currentUser.token;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();
  const [alerts, setAlert] = React.useState({
    status: "",
    isError: false,
    alertMessage: "",
  });
  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const handleClose = () => {
    setAlert({ isError: false, errorMessage: "" });
  };
  const limit = 15;
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const ListUsers = async () => {
    setfetchingData(true);
    await axios
      .get(
        `${ProxyUrl}/users/ListFirstMatchedRecyclers/?pageNo=${pageNo}&limit=${limit}`,
        {
          headers: { authorization: token },
        }
      )
      .then(function (response) {
        setfetchingData(false);
        console.log(response.data);
        setListResult(response.data.userData);
        setTotalCount(response.data.totalCount);
        if (response.data.totalCount > response.data.limit) {
          setPageNo(pageNo + 1);
        }
      })
      .catch(function (error) {
        setfetchingData(false);
        //   setloadingVerify(false)
        //   if (error.response) {
        console.log(error);
        setListResult([]);
        // setAlert({
        //   status: "error",
        //   isError: true,
        //   alertMessage: "error occured ",
        // });
        //   }
      });
  };

  const handleNext = () => {
    console.log(pageNo);
    ListUsers();
  };

  const ConfirmRecyclePaymentReceived = async (payerId) => {
    setfetchingData(true);
    await axios
      .post(
        `${ProxyUrl}/users/ConfirmRecyclePaymentReceived`,
        { payerId: payerId },
        { headers: { authorization: token } }
      )
      .then((res) => {
        setfetchingData(true);
        ListUsers();
        dispatch(SYNCUSERDATA(res.data.userdata));
        setAlert({
          status: "success",
          isError: true,
          alertMessage: "successful",
        });
      })
      .catch((err) => {
        setfetchingData(false);
        // setCountLoading(false)
        setAlert({
          status: "error",
          isError: true,
          alertMessage: " error occured , pls try again",
        });
        if (err.response) {
          console.log(err.response.data.message);
        }
        console.log(err);
      });
  };
  // const ApproveUser = async (id) => {
  //   console.log(id);
  //   //axios request to delete
  //   setfetchingData(true);
  //   await axios
  //     .get(`${process.env.REACT_APP_API_URL}/users/ApproveUser?userId=${id}`, {
  //       headers: { authorization: token },
  //     })
  //     .then((res) => {
  //       setfetchingData(false);
  //       // setfetchingData(false);
  //       ListUsers();
  //       console.log(res.data.userData);
  //       setAlert({
  //         status: "success",
  //         isError: true,
  //         alertMessage: res.data.message,
  //       });
  //       // setListResult([]);
  //     })
  //     .catch((err) => {
  //       setfetchingData(false);
  //       // setCountLoading(false)
  //       setAlert({
  //         status: "error",
  //         isError: true,
  //         alertMessage: " error occured , pls try again",
  //       });
  //       if (err.response) {
  //         console.log(err.response.data.message);
  //       }
  //       console.log(err);
  //     });
  // };
  // const RejectRequest = async (id) => {
  //   console.log(id);
  //   //axios request to delete
  //   setfetchingData(true);
  //   await axios
  //     .get(
  //       `${process.env.REACT_APP_API_URL}/users/RejectRequest?userId=${id}`,
  //       {
  //         headers: { authorization: token },
  //       }
  //     )
  //     .then((res) => {
  //       setfetchingData(false);
  //       // setfetchingData(false);
  //       ListUsers();
  //       console.log(res.data.userData);
  //       setAlert({
  //         status: "success",
  //         isError: true,
  //         alertMessage: res.data.message,
  //       });
  //       // setListResult([]);
  //     })
  //     .catch((err) => {
  //       setfetchingData(false);
  //       // setCountLoading(false)
  //       setAlert({
  //         status: "error",
  //         isError: true,
  //         alertMessage: " error occured , pls try again",
  //       });
  //       if (err.response) {
  //         console.log(err.response.data.message);
  //       }
  //       console.log(err);
  //     });
  // };

  const handleCloseMenu = (option, id) => {
    setAnchorEl(null);
    console.log(id);
    console.log(option);
    if (option === "Confirm Payment Received") {
      //   alert("approve");
      //handleconfirreceived
      // ApproveUser(id);
      ConfirmRecyclePaymentReceived(id);
    }
    if (option === "Reject") {
      //   alert("approve");
      // RejectRequest(id);
    }
  };

  const resultarrayMap =
    ListResult.length > 0 &&
    ListResult.map((item) => {
      console.log(item);
      const icon = (
        <div>
          <IconButton
            aria-label="more"
            aria-controls="long-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="long-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleCloseMenu}
            PaperProps={{
              style: {
                maxHeight: 30 * 4.5,
                width: "20ch",
              },
            }}
          >
            {options.map((option) => (
              <MenuItem
                key={option}
                selected={option === "Cancel"}
                onClick={handleCloseMenu.bind(this, option, item._id)}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>
        </div>
      );
      return createData(
        item.fullName,
        item.Email,
        item.mobile,
        <a href={`${item.evidenImageUri}`} rel="noreferrer" target="_blank">
          View
        </a>,

        icon
      );
    });

  React.useEffect(() => {
    ListUsers();
  }, []);
  const classes = useStyles();
  return (
    <Main>
      <UsersHeader>
        <MediumText style={{ alignSelf: "flex-start" }}>
          Recycle Board Payments &nbsp;({totalCount}){" "}
        </MediumText>
        <small
          style={{ color: "tomato", fontSize: "12px", marginBottom: "12px" }}
        >
          **once payment is confirmed, the recycle board is unlocked for the
          cycle
        </small>
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
        {pageNo !== 0 && totalCount > pageNo * limit ? (
          <MediumText
            onClick={handleNext}
            style={{
              alignSelf: "flex-end",
              color: "blue",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Next{" "}
          </MediumText>
        ) : null}
        {/* { totalCount>pageNo*limit ?<MediumText onClick={handleNext} style={{alignSelf:'flex-end'}}>{pageNo*limit}/{totalCount}</MediumText>:null} */}
        {fetchingData ? (
          <CircularProgress
            size={40}
            color="primary"
            style={{ color: "tomato" }}
          />
        ) : (
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell align="right">Email</TableCell>
                  <TableCell align="right">Mobile&nbsp;(no)</TableCell>
                  <TableCell align="right">Payment Evidence</TableCell>
                  {/* <TableCell align="right">T/C image</TableCell> */}
                  <TableCell align="right"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.mobile}</TableCell>
              <TableCell align="right">{row.position}</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          ))} */}
                {ListResult.length > 0
                  ? resultarrayMap.map((row) => (
                      <TableRow key={row.name}>
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="right">{row.email}</TableCell>
                        <TableCell align="right">{row.mobile}</TableCell>

                        <TableCell align="right">{row.idcard}</TableCell>
                        {/* <TableCell align="right">{row.termsImage}</TableCell> */}
                        <TableCell align="right">{row.icon}</TableCell>
                      </TableRow>
                    ))
                  : null}
              </TableBody>
            </Table>
          </TableContainer>
        )}

        {pageNo !== 0 && totalCount > pageNo * limit ? (
          <MediumText
            onClick={handleNext}
            style={{
              alignSelf: "flex-end",
              color: "blue",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Next{" "}
          </MediumText>
        ) : null}
      </UsersHeader>
    </Main>
  );
};

export default RecyclePayments;

// import React from 'react';
// import styled from 'styled-components'

// const Main = styled.div`
//   min-height: 95vh;
//   background-color: #f1f0f0;
//   display: flex;
//   width:100%;
//   flex-direction: column;
//   align-items: center;
//   padding-bottom: 30px;
// `;

// const RequestHeader = styled.div`
// min-height: 98vh;
//   width: 98%;
//   background-color: #ffff;
//   background-image: linear-gradient(to right,#fdfcfb , #e2d1c3);

//   // background-image: linear-gradient(to-right,#fdfbfb , #ebedee);
//   padding: 10px;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   align-items: center;
// `;
// const MediumText = styled.p`
//   color: grey;
//   font-size: 14px;
//   font-weight: 700;
// `;

// const RequestReg = () => {
//     return ( <Main>

// <RequestHeader>   <MediumText style={{alignSelf:'flex-start'}}>New request to register &nbsp;     </MediumText></RequestHeader>
//     </Main> );
// }

// export default RequestReg;
