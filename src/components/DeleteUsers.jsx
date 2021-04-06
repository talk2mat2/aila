import React from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import axios from "axios";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import CircularProgress from "@material-ui/core/CircularProgress";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const Main = styled.div`
  min-height: 95vh;
  background-color: #f1f0f0;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding-bottom: 30px;
`;

const RequestHeader = styled.div`
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

const MediumText = styled.p`
  color: grey;
  font-size: 14px;
  font-weight: 700;
`;
const TextFields = styled(TextField)`
  border: none;
  width: 300px;
  @media (max-width: 450px) {
    width: 70vw;
  }
`;
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, email, mobile, item, icon) {
  console.log(item);
  const position =
    item.downLiners && item.downLiners.length > 0
      ? "water position (Gifted)"
      : item.referrals.length && item.downLiners.length > 1
      ? "wind position"
      : "Fire Position";
  // let position=item

  return { name, email, mobile, position, icon };
}
const DeleteUser = () => {
  const classes = useStyles();
  const [Dialogueopen, setDialogueOpen] = React.useState(false);
  const [searchUsersResult, setSearchUsersResult] = React.useState([]);
  const [fetchingData, setfetchingData] = React.useState(false);
  const [ListResult, setListResult] = React.useState([]);
  const [searchUsers, setSearchUsers] = React.useState("");
  const currentUser = useSelector((state) => state.user.currentUser);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const token = currentUser && currentUser.token;
  const [alerts, setAlert] = React.useState({
    status: "",
    isError: false,
    alertMessage: "",
  });
  const userdata =
    (currentUser && currentUser.token && currentUser.userdata) || {};
  const handleClose = (option, id) => {
    setAnchorEl(null);
    // console.log(id);
    if (option === "Delete") {
      handleClickOpen(id);
    }
  };
  const handleClickOpen = () => {
    setDialogueOpen(true);
  };
  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  const handleCloseAlert = () => {
    setAlert({ isError: false, errorMessage: "" });
  };
  const handleDialogueClose = () => {
    setDialogueOpen(false);
  };
  const options = ["Cancel", "Delete"];
  const SearchUsersApi = async (search) => {
    setfetchingData(true);
    await axios
      .get(
        `${process.env.REACT_APP_API_URL}/users/SearchUsers?search=${search}`,
        {
          headers: { authorization: token },
        }
      )
      .then((res) => {
        setfetchingData(false);
        console.log(res.data.userData);
        setListResult(res.data.userData);
      })
      .catch((err) => {
        setfetchingData(false);
        // setCountLoading(false)

        if (err.response) {
          console.log(err.response.data.message);
        }
        console.log(err);
      });
  };
  const handleSearch = async (value) => {
    setSearchUsers(value);

    await SearchUsersApi(value);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDeleteUser = async (id) => {
    console.log(id);
    //axios request to delete
    setfetchingData(true);
    await axios
      .get(`${process.env.REACT_APP_API_URL}/users/DeleteUser?deleteId=${id}`, {
        headers: { authorization: token },
      })
      .then((res) => {
        setfetchingData(false);
        // setfetchingData(false);
        console.log(res.data.userData);
        setAlert({
          status: "success",
          isError: true,
          alertMessage: res.data.message,
        });
        setListResult([]);
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
  const resultarrayMap =
    ListResult &&
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
            onClose={handleClose}
            PaperProps={{
              style: {
                maxHeight: 25 * 4.5,
                width: "20ch",
              },
            }}
          >
            {options.map((option) => (
              <MenuItem
                key={option}
                selected={option === "Cancel"}
                onClick={handleClose.bind(this, option, item._id)}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>
          <Dialog
            open={Dialogueopen}
            onClose={handleDialogueClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Delete this user?"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Are you sure to delete this user from IFF ?, this action can not
                be undone.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleDialogueClose} color="primary">
                Cancel
              </Button>
              <Button
                onClick={() => {
                  handleDialogueClose();
                  handleDeleteUser(item._id);
                }}
                color="primary"
                autoFocus
              >
                Delete
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      );
      return createData(item.fullName, item.Email, item.mobile, item, icon);
    });
  return (
    <Main>
      <Snackbar
        open={alerts.isError}
        onClose={handleCloseAlert}
        autoHideDuration={6000}
        anchorOrigin={{ horizontal: "center", vertical: "top" }}
      >
        <Alert onClose={handleCloseAlert} severity={alerts.status}>
          {alerts.alertMessage}
        </Alert>
      </Snackbar>
      <RequestHeader>
        <MediumText style={{ alignSelf: "flex-start" }}>
          Search and delete user &nbsp;{" "}
        </MediumText>

        <TextFields
          value={searchUsers}
          autoComplete="off"
          onChange={(e) => handleSearch(e.target.value)}
          id="searchusers"
          label="Search users by name, email or mobile"
        />
        {fetchingData ? (
          <CircularProgress
            size={40}
            color="primary"
            style={{ color: "tomato" }}
          />
        ) : (
          <TableContainer component={Paper}>
            {ListResult && ListResult.length > 0 ? (
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
                  {ListResult && ListResult.length > 0
                    ? resultarrayMap.map((row) => (
                        <TableRow key={row.name}>
                          <TableCell component="th" scope="row">
                            {row.name}
                          </TableCell>
                          <TableCell align="right">{row.email}</TableCell>
                          <TableCell align="right">{row.mobile}</TableCell>
                          <TableCell align="right">{row.position}</TableCell>
                          <TableCell align="right">{row.icon}</TableCell>
                        </TableRow>
                      ))
                    : null}
                </TableBody>
              </Table>
            ) : null}
          </TableContainer>
        )}
      </RequestHeader>
    </Main>
  );
};

export default DeleteUser;
