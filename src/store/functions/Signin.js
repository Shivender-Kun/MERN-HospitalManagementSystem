import axios from "axios";
import { createAction, createReducer } from "@reduxjs/toolkit";

// Actions

const DoctorSignedIn = createAction("DoctorSignedIn");

const PatientSignedIn = createAction("PatientSignedIn");

const AdminSignedIn = createAction("AdminSignedIn");

const SignInFailed = createAction("SignInFailed");

const SignedUserUpdated = createAction("SignedUserUpdated");

const LoggedOut = createAction("LoggedOut");

export const SignIn = (data) => {
  return async (dispatch) => {
    await state(dispatch, data);
  };
};

const state = async (dispatch, data) => {
  try {
    if (data.opr === "update") {
      data.opr = "updated";
      dispatch(SignedUserUpdated(data));
      return;
    }
  } catch (err) {
    return err;
  }

  const url = "http://localhost:4000/signin/";
  const user = data.userType;

  try {
    if (user === "log out") {
      dispatch(LoggedOut());
      return;
    }

    const result = await axios.post(`${url}${user}`, data);

    if (user === "admin") {
      dispatch(AdminSignedIn(result.data[0]));
    } else if (user === "doctor") {
      dispatch(DoctorSignedIn(result.data[0]));
    } else if (user === "patient") {
      dispatch(PatientSignedIn(result.data[0]));
    }

    return result;
  } catch (error) {
    dispatch(SignInFailed(error.message));
  }
};

// Initial state

const initialState = {
  token: "",
  userSignedIn: "",
  userData: [],
  signInFailed: "",
  loggedOut: false,
};

// Reducers

export const signInReducer = createReducer(initialState, {
  DoctorSignedIn: (state, action) => {
    state.userSignedIn = "doctor";
    state.userData = action.payload;
    state.loggedOut = false;
    state.signInFailed = "";
  },
  PatientSignedIn: (state, action) => {
    state.userSignedIn = "patient";
    state.userData = action.payload;
    state.loggedOut = false;
    state.signInFailed = "";
  },
  AdminSignedIn: (state, action) => {
    state.userSignedIn = "admin";
    state.userData = action.payload;
    state.loggedOut = false;
    state.signInFailed = "";
  },
  SignInFailed: (state, action) => {
    state.signInFailed = action.payload;
    state.userData = [];
    state.userSignedIn = "";
    state.loggedOut = false;
  },
  LoggedOut: (state, action) => {
    state.signInFailed = "";
    state.userData = [];
    state.userSignedIn = "";
    state.loggedOut = true;
  },
  SignedUserUpdated: (state, action) => {
    state.userData = {
      ...state.userData,
      ...action.payload,
    };
  },
});
