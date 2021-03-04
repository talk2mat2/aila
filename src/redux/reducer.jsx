import * as Action_types from "./actiontypes";

const init_state = { currentUser: null };
export const UserReducers = (state = init_state, action) => {
  if (action.type === Action_types.LOGINSUCCESS) {
    return { ...state, currentUser: action.payload };
  } else {
    if (action.type === Action_types.LOGINOUTUSER) {
      return { ...state, currentUser: null };
    }
    if (action.type === Action_types.SYNCUSERDATA) {
      return {
        ...state,
        currentUser: { ...state.currentUser, userdata: action.payload },
      };
    } else {
      console.log("null");
      return state;
    }
  }
};
