import axios from "axios";
import { createAction, createReducer } from "@reduxjs/toolkit";

// Actions

const DoctorSignedIn = createAction("DoctorSignedIn");

const PatientSignedIn = createAction("PatientSignedIn");

const AdminSignedIn = createAction("AdminSignedIn");

const SignInFailed = createAction("SignInFailed");

const SignedUserUpdated = createAction("SignedUserUpdated");

const LoggedOut = createAction("LoggedOut");

const TokenLogin = createAction("TokenLogin");

export const SignIn = (data) => {
  return async (dispatch) => {
    await state(dispatch, data);
  };
};

const state = async (dispatch, data) => {
  try {
    if (data.token) {
      const url = "https://hms-backend-server.herokuapp.com/auth/";
      let config = {
        headers: {
          "x-auth-token": data.token,
        },
      };
      try {
        const res = await axios.post(url, null, config);
        dispatch(TokenLogin(res.data));
        return;
      } catch (error) {
        dispatch(SignInFailed(error.message));
      }
    }

    if (data.opr === "update") {
      data.opr = "updated";
      dispatch(SignedUserUpdated(data));
      return;
    }

    const url = "https://hms-backend-server.herokuapp.com/signin/";
    const user = data.userType;

    if (user === "log out") {
      dispatch(LoggedOut());
      return;
    }

    const result = await axios.post(`${url}${user}`, data);

    if (user === "admin") {
      dispatch(AdminSignedIn(result.data));
    } else if (user === "doctor") {
      dispatch(DoctorSignedIn(result.data));
    } else if (user === "patient") {
      dispatch(PatientSignedIn(result.data));
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
    state.token = action.payload.token;
    state.userSignedIn = "doctor";
    state.userData = action.payload[0];
    state.loggedOut = false;
    state.signInFailed = "";
  },
  PatientSignedIn: (state, action) => {
    state.token = action.payload.token;
    state.userSignedIn = "patient";
    state.userData = action.payload[0];
    state.loggedOut = false;
    state.signInFailed = "";
  },
  AdminSignedIn: (state, action) => {
    state.token = action.payload.token;
    state.userSignedIn = "admin";
    state.userData = action.payload[0];
    state.loggedOut = false;
    state.signInFailed = "";
  },
  SignInFailed: (state, action) => {
    state.signInFailed = action.payload;
    state.userData = [];
    state.userSignedIn = "";
    state.loggedOut = false;
  },
  TokenLogin: (state, action) => {
    state.userSignedIn = action.payload.user;
    state.userData = action.payload[0];
    state.loggedOut = false;
    state.signInFailed = "";
  },
  LoggedOut: (state, action) => {
    state.signInFailed = "";
    state.token = "";
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
