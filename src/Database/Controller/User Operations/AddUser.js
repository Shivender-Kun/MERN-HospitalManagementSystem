import { Doctor, Patient, Admin } from "../Controller.js";
import bcrypt from "bcrypt";

// Add new user.
const addUser = async (req, res) => {
  try {
    const user = req.query.user || req.params.user;
    const data = req.body;
    // Creating new User.
    const addedUser = await checkUser(user, data);
    // Saving new User's data.
    const saveUser = await addedUser.save();
    res.status(201).json({
      message: "success",
      ...saveUser,
    });
  } catch (error) {
    res.status(400).json({
      message: "failed",
      error: error.message,
    });
  }
};

const checkUser = async (user, data) => {
  let addeduser;
  data.password = await hash(data.password);
  if (user === "doctor") {
    addeduser = await new Doctor(data);
  } else if (user === "patient") {
    addeduser = await new Patient(data);
  } else if (user === "admin") {
    addeduser = await new Admin(data);
  }

  return addeduser;
};

const hash = async (data) => {
  const hashPass = await bcrypt.hash(`${data}`, 10);
  return hashPass;
};

export default addUser;
