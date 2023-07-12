import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGGIN_USER,
} from "../actions/types";

const INITAL_STATE = {
  email: "",
  password: "",
  user: null,
  error: "",
  loading: false,
};

export default (state = INITAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case EMAIL_CHANGED:
      state.email = action.payload;
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case LOGGIN_USER:
      return { ...state, loading: true, error: "" };
    case LOGIN_USER_SUCCESS:
      return { ...state, ...INITAL_STATE, user: action.payload };
    case LOGIN_USER_FAIL:
      return {
        ...state,
        error: "Authentication Failed",
        password: "",
        loaading: false,
      };
    default:
      return state;
  }
};
