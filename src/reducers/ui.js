import initialState from "./initialState";
import * as types from "../constants/action-types";

export default (state = initialState.ui, action) => {
  switch (action.type) {
    case types.UI_LOGIN_MODAL_OPEN:
      return { ...state, showLoginModal: true };
    case types.UI_LOGIN_MODAL_CLOSE:
      return { ...state, showLoginModal: false };
    default:
      return state;
  }
};
