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
import { useSelector } from "react-redux";

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

function createData(name, email, mobile, item) {
  console.log(item);
  const position =
    item.downLiners && item.downLiners.length > 0
      ? "water position (Gifted)"
      : item.referrals.length && item.downLiners.length > 1
      ? "wind position"
      : "Fire Position";
  // let position=item

  return { name, email, mobile, position };
}

//   const rows = [
//     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//     createData('Eclair', 262, '0803790260', 24, 6.0),
//     createData('Cupcake', 305, 3.7, 67, 4.3),
//     createData('Gingerbread', 356, 16.0, 49, 3.9),
//     // createData('Gingerbread', 356, 16.0, 49, 3.9),
//     // createData('Gingerbread', 356, 16.0, 49, 3.9),
//     // createData('Gingerbread', 356, 16.0, 49, 3.9),
//     // createData('Gingerbread', 356, 16.0, 49, 3.9),
//   ];

const UsersPage = () => {
  const [pageNo, setPageNo] = React.useState(0);
  const [fetchingData, setfetchingData] = React.useState(false);
  const [ListResult, setListResult] = React.useState([]);
  const [totalCount, setTotalCount] = React.useState(0);
  const ProxyUrl = process.env.REACT_APP_API_URL;
  const currentUser = useSelector((state) => state.user.currentUser);
  const token = currentUser && currentUser.token;
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
  const ListUsers = async () => {
    setfetchingData(true);
    await axios
      .get(`${ProxyUrl}/users/ListUsers/?pageNo=${pageNo}&limit=${limit}`, {
        headers: { authorization: token },
      })
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
        setAlert({
          status: "error",
          isError: true,
          alertMessage: "error occured ",
        });
        //   }
      });
  };

  const handleNext = () => {
    console.log(pageNo);
    ListUsers();
  };
  const resultarrayMap =
    ListResult.length > 0 &&
    ListResult.map((item) => {
      console.log(item);
      return createData(item.fullName, item.Email, item.mobile, item);
    });

  React.useEffect(() => {
    ListUsers();
  }, []);
  const classes = useStyles();
  return (
    <Main>
      <UsersHeader>
        <MediumText style={{ alignSelf: "flex-start" }}>
          Registered users &nbsp;({totalCount}){" "}
        </MediumText>
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
                  <TableCell align="right">Position</TableCell>
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
                        <TableCell align="right">{row.position}</TableCell>
                        <TableCell align="right"></TableCell>
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

export default UsersPage;
