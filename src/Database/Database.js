import DB_Connect from "./Connection/Connection.js";
import {
  getOne,
  addUser,
  getUser,
  status,
  deleteUser,
  updateUser,
  bookAppointment,
} from "./Controller/Controller.js";

export {
  addUser,
  deleteUser,
  getUser,
  updateUser,
  getOne,
  status,
  DB_Connect,
  bookAppointment,
};
