import { Doctor, Patient } from "../Controller.js";
import checkOne from "./checkUser.js";

const deleteUser = async (req, res) => {
  try {
    const user = req.params.user;
    const { userName, password } = req.body;

    const check = await checkOne(user, userName, password);

    if (check) {
      const deleting = await checkUser(user, userName);
      res.status(200).json({
        message: "success",
        ...deleting,
      });
      return;
    }

    res.status(200).json({
      message: "failed",
      ...deleting,
    });
    return;
  } catch (error) {
    res.status(400).json({
      message: "failed",
      error: error.message,
    });
    return;
  }
};

const checkUser = async (user, userName) => {
  let deletedUser;
  if (user === "doctor") {
    deletedUser = await Doctor.deleteOne({ userName });
  } else if (user === "patient") {
    deletedUser = await Patient.deleteOne({ userName });
  }
  return deletedUser;
};

export default deleteUser;
