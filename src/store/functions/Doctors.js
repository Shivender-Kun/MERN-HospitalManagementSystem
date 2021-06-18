import axios from "axios";
import { createAction, createReducer } from "@reduxjs/toolkit";

// Actions

const fetchDoctorsRequest = createAction("Fetch_Doctors_Request");

const fetchDoctorsSuccess = createAction("Fetch_Doctors_Success");

const fetchDoctorsFailure = createAction("Fetch_Doctors_Failure");

export const fetchDoctors = () => {
  return async (dispatch) => {
    dispatch(fetchDoctorsRequest());
    try {
      const doctors = await axios.get(
        "https://hms-backend-server.herokuapp.com/doctors"
      );
      dispatch(fetchDoctorsSuccess(doctors.data));
    } catch (error) {
      dispatch(fetchDoctorsFailure(error.message));
    }
  };
};

// Initial State

const initialState = {
  loading: false,
  data: [],
  message: "",
  error: "",
};

// Reducers

export const doctorReducer = createReducer(initialState, {
  Fetch_Doctors_Request: (state, action) => {
    state.loading = true;
  },
  Fetch_Doctors_Success: (state, action) => {
    state.loading = false;
    state.data = action.payload.allUsers;
    state.message = action.payload.message;
  },
  Fetch_Doctors_Failure: (state, action) => {
    state.loading = false;
    state.data = [];
    state.error = action.payload;
    state.message = action.payload.message;
  },
});
