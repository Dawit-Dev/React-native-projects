import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../actions/firebaseConfig";
import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEES_FETCH_SUCCESS,
  EMPLOYEE_SAVE_SUCCESS,
} from "./types";
import { useNavigation } from "@react-navigation/native";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value },
  };
};

export const employeeCreate = ({ name, phone, shift, navigation }) => {
  const { currentUser } = auth();

  return (dispatch) => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees`)
      .push({ name, phone, shift })
      .then(() => {
        dispatch({ type: EMPLOYEE_CREATE });
        navigation.reset({ index: 0, routes: [{ name: "employeeList" }] });
      });
  };
};

export const employeesFetch = () => {
  const { currentUser } = auth();

  return (dispatch) => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees`)
      .on("value", (snapshot) => {
        dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};

export const employeeSave = ({ name, phone, shift, uid, navigation }) => {
  const { currentUser } = auth();

  return (dispatch) => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees/${uid}`)
      .set({ name, phone, shift })
      .then(() => {
        dispatch({ type: EMPLOYEE_SAVE_SUCCESS });
        navigation.reset({ index: 0, routes: [{ name: "employeeList" }] });
      });
  };
};

export const employeeDelete = ({ uid, navigation }) => {
  const { currentUser } = auth();

  return () => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees/${uid}`)
      .remove()
      .then(() => {
        navigation.reset({ index: 0, routes: [{ name: "employeeList" }] });
      });
  };
};
