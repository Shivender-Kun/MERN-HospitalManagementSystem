import { configureStore } from "@reduxjs/toolkit";
import {
  doctorReducer,
  patientReducer,
  signInReducer,
  crudReducer,
  navbarReducer,
  messageReducer,
} from "./index";

const store = configureStore({
  reducer: {
    doctorReducer,
    patientReducer,
    signInReducer,
    crudReducer,
    navbarReducer,
    messageReducer,
  },
});

export default store;
