import firebase from "firebase/app";
import "firebase/auth";
import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS } from "./types";

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text,
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text,
  };
};

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
      })
      .catch((error) => {
        // Handle error if sign-in fails
        dispatch({ type: "LOGIN_USER_FAIL", payload: error.message });
      });
  };
};
