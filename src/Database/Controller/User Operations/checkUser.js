import { Doctor, Patient, Admin } from "../Controller.js";
import bcrypt from "bcrypt";

const checkUser = async (user, userName, password) => {
  const userData = await getOneUser(user, userName);
  const compare = await match(password, userData[0].password);
  if (compare) return userData;
  return false;
};

const getOneUser = async (user, userName) => {
  let show;
  if (user === "admin") {
    show = await Admin.find({ userName }).select(["-_id", "-__v"]);
  } else if (user === "doctor") {
    show = await Doctor.find({ userName }).select(["-_id", "-__v"]);
  } else if (user === "patient") {
    show = await Patient.find({ userName }).select(["-_id", "-__v"]);
  }
  return show;
};

const match = async (password, hash) => {
  const matchPass = await bcrypt.compare(password, hash);
  return matchPass;
};

export default checkUser;
