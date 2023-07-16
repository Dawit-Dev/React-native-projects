import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
} from "./types";
import { firebaseConfig } from "./firebaseConfig";
import { initializeApp } from "firebase/app";

// Initialize Firebase app
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

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
    dispatch({ type: LOGIN_USER });

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => loginUserSuccess(dispatch, userCredential.user))
      .catch(() => {
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) =>
            loginUserSuccess(dispatch, userCredential.user)
          )
          .catch(() => loginUserFail(dispatch));
      });
  };
};

const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL });
};

const loginUserSuccess = (dispatch) => {
  dispatch({ type: LOGIN_USER_SUCCESS });

  const navigation = useNavigation();
  navigation.navigate("employeeList");
};
 