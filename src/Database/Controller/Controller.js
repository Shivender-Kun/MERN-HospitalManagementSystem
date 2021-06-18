import Admin from "../Models/Admin.js";
import Doctor from "../Models/Doctor.js";
import Patient from "../Models/Patient.js";
//
import getOne from "./User Operations/GetOne.js";
import status from "./User Operations/Status.js";
import getUser from "./User Operations/GetUser.js";
import addUser from "./User Operations/AddUser.js";
import deleteUser from "./User Operations/DeleteUser.js";
import updateUser from "./User Operations/UpdateUser.js";
import bookAppointment from "./User Operations/Appointment.js";

export {
  Admin,
  Doctor,
  Patient,
  //
  getOne,
  addUser,
  getUser,
  status,
  deleteUser,
  updateUser,
  bookAppointment,
};
