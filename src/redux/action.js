import * as acttiontypes from "./actiontypes";
export const LOGINSUCCESS = (response) => {
  return {
    type: acttiontypes.LOGINSUCCESS,
    payload: response,
  };
};

export const LOGINOUTUSER = () => {
  console.log("called me");
  return {
    type: acttiontypes.LOGINOUTUSER,
  };
};
export const SYNCUSERDATA = (userData) => {
  console.log("called me");
  return {
    type: acttiontypes.SYNCUSERDATA,
    payload: userData,
  };
};
