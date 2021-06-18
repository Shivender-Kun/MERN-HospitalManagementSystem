import { Doctor, Patient } from "../Controller.js";

const getUsers = async (req, res) => {
  try {
    const user = req.params.user;
    const allUsers = await checkUser(user);
    allUsers.length > 0
      ? res.status(200).json({
          message: "success",
          allUsers,
        })
      : res.status(404).json({
          status: 404,
          message: "empty",
        });
  } catch (error) {
    res.status(400).json({
      message: "failed",
      error: error.message,
    });
  }
};

const checkUser = async (user) => {
  let showUser;
  if (user === "doctors") {
    showUser = await Doctor.find()
      .select(["-password", "-_id", "-__v"])
      .sort({ name: 1 });
  } else if (user === "patients") {
    showUser = await Patient.find()
      .select(["-password", "-_id", "-__v"])
      .sort({ name: 1 });
  }
  return showUser;
};

export default getUsers;
