import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import UsersPage from "./users";
import RequestReg from "./RequestReg";
import DeleteUser from "./DeleteUsers";
import ApprovedUsers from "./Approved";

const Container = styled.div``;
const Main = styled.div`
  min-height: 95vh;
  background-color: #f1f0f0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 30px;
`;

const Margin = styled.div`
  height: 120px;
`;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      style={{ width: "100vw" }}
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `wrapped-tab-${index}`,
    "aria-controls": `wrapped-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

const AdminDashBoard = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Container>
      <Margin />
      <Main>
        <AppBar
          style={{ zIndex: 1, backgroundColor: "tomato", color: "white" }}
          position="static"
          color="default"
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="wrapped label tabs example"
          >
            <Tab value="one" label="Users" wrapped {...a11yProps("one")} />
            <Tab value="two" label="Register Request" {...a11yProps("two")} />
            <Tab value="three" label="delete User" {...a11yProps("three")} />
            <Tab value="four" label="Approved users" {...a11yProps("four")} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index="one">
          <UsersPage />
        </TabPanel>
        <TabPanel value={value} index="two">
          <RequestReg />
        </TabPanel>
        <TabPanel value={value} index="three">
          <DeleteUser />
        </TabPanel>
        <TabPanel value={value} index="four">
          <ApprovedUsers />
        </TabPanel>
      </Main>
    </Container>
  );
};

export default AdminDashBoard;
