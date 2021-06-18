import Signin from "./Authorisation/Signin";
import Signup from "./Authorisation/Signup";

import Home from "./Home/Home";
import Doctors from "./Home/SubComponents/Doctors/Doctors";
import Patients from "./Home/SubComponents/Patients/Patients";

import PatientUser from "./Users/Patient/Patient";
import DoctorUser from "./Users/Doctor/Doctor";
import AdminUser from "./Users/Admin/Admin";

import table from "./Home/SubComponents/Table/Table";

import {
  Added,
  Updated,
  Deleted,
  fetchDoctors,
  fetchPatients,
  SignIn,
  Show,
} from "../../store/index";

import {
  LogOut,
  UserCard,
  DeleteUser,
  Appointment,
} from "./Sub Components/SubComponents";

export {
  PatientUser,
  DoctorUser,
  AdminUser,
  //
  Signup,
  Signin,
  //
  Home,
  Doctors,
  Patients,
  //
  Added,
  Updated,
  Deleted,
  SignIn,
  Show,
  //
  fetchDoctors,
  fetchPatients,
  //
  LogOut,
  UserCard,
  DeleteUser,
  Appointment,
  //
  table,
};
