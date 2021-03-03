import React from "react";
import Footer from "./Footer";
import NavBar from "./navbar";
import styled from "styled-components";
import { useSelector } from "react-redux";
const Main = styled.div`
  min-height: 95vh;
  background-color: #f1f0f0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 30px;
`;
const DashboardHeader = styled.div`
  height: 100px;
  width: 98%;
  background-color: #ffff;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const RefferHeader = styled.div`
  height: 80px;
  margin-top: 10px;
  width: 98%;
  background-color: #ffff;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const ReferralContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 98%;
  flex-wrap: wrap;
  padding: 10px;
  background-color: white;
  margin: 10px;
  margin-top: 0px;
  min-height: 160px;
  justify-content: center;
`;
const BigText = styled.p`
  color: grey;
  font-size: 20px;
`;
const MediumText = styled.p`
  color: grey;
  font-size: 15px;
  font-weight: 700;
`;
const SmallText = styled.p`
  color: #f0fff0;
  font-size: 14px;
  font-weight: 700;
  font-family: boxicons !important;
`;
const Margin = styled.div`
  height: 100px;
`;

const CardsContainer = styled.div`
  width: 200px;
  height: 160px;
  background-color: ${({ color }) => color || "grey"};
  border-radius: 10px;
  margin: 5px;
  text-align: center;

  padding: 3px;
  overflow-wrap: break-word;
  word-wrap: break-word;

  padding: 4px;
`;
const ReferralCards = (props) => {
  const { Email, fullName } = props.data;
  return (
    <CardsContainer color={props.color}>
      <SmallText>Name: {fullName}</SmallText>
      <SmallText>Email: {Email}</SmallText>
    </CardsContainer>
  );
};
const DownLinerCards = (props) => {
  return (
    <CardsContainer color={props.color}>
      <SmallText>Name: sarrah mohammed</SmallText>
      <SmallText>Email: microsoft90@yahoo.com</SmallText>
      <SmallText>Introduced by: sarray mohhamed</SmallText>
    </CardsContainer>
  );
};

const DashBoard = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const userdata = currentUser && currentUser.token && currentUser.userdata;
  const colors = ["tomato", "#4c8bf5", "#5851db", "orange"];
  console.log(userdata.referrals);

  const MapReferrs = () => {
    return userdata.referrals.length > 1 ? (
      userdata.referrals.map((data) => {
        return <ReferralCards color="#4c8bf5" data={data} />;
      })
    ) : (
      <MediumText>No Referrals yet..</MediumText>
    );
  };

  return (
    <div>
      <NavBar />
      <Main>
        <Margin />
        <DashboardHeader>
          <div>
            {" "}
            <MediumText>{userdata.Email}</MediumText>
            <BigText>My Referral Code- {userdata.referralCode}</BigText>
          </div>
          <BigText>Dashboard</BigText>
        </DashboardHeader>
        <RefferHeader>
          <BigText>My Referrals - (3)</BigText>
        </RefferHeader>
        <ReferralContainer>
          {/* <ReferralCards color="#4c8bf5" />
          <ReferralCards color="#4c8bf5" /> */}

          {MapReferrs()}
        </ReferralContainer>
        <RefferHeader>
          <BigText>My Referral Downliners (6)</BigText>
        </RefferHeader>
        <ReferralContainer>
          <DownLinerCards color="#4c8bf5" />
          <DownLinerCards color="#4c8bf5" />
          <DownLinerCards color="#4c8bf5" />
          <DownLinerCards color="#4c8bf5" />
        </ReferralContainer>
      </Main>
      <Footer />
    </div>
  );
};

export default DashBoard;
