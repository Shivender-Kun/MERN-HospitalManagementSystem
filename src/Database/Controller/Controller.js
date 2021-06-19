import Patient from "../Models/Patient.js";
import Doctor from "../Models/Doctor.js";
import Admin from "../Models/Admin.js";
//
import bookAppointment from "./User Operations/Appointment.js";
// import deleteUser from "./User Operations/DeleteUser.js";
// import updateUser from "./User Operations/UpdateUser.js";
import getUser from "./User Operations/GetUser.js";
import addUser from "./User Operations/AddUser.js";
import jwtAuth from "./User Operations/jwtAuth.js";
import getOne from "./User Operations/GetOne.js";
import status from "./User Operations/Status.js";

export {
  Patient,
  Doctor,
  Admin,
  //
  bookAppointment,
  // deleteUser,
  // updateUser,
  jwtAuth,
  addUser,
  getUser,
  getOne,
  status,
};
