import axios from "axios";
import { createAction, createReducer } from "@reduxjs/toolkit";

// Actions

const fetchPatientsRequest = createAction("Fetch_Patients_Request");

const fetchPatientsSuccess = createAction("Fetch_Patients_Success");

const fetchPatientsFailure = createAction("Fetch_Patients_Failure");

export const fetchPatients = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchPatientsRequest());
      const patients = await axios.get(
        "https://hms-backend-server.herokuapp.com/patients"
      );
      dispatch(fetchPatientsSuccess(patients.data));
    } catch (error) {
      dispatch(fetchPatientsFailure(error.message));
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

export const patientReducer = createReducer(initialState, {
  Fetch_Patients_Request: (state, action) => {
    state.loading = true;
  },
  Fetch_Patients_Success: (state, action) => {
    state.loading = false;
    state.data = action.payload.allUsers;
    state.message = action.payload.message;
  },
  Fetch_Patients_Failure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.data = [];
    state.message = action.payload.message;
  },
});
