import { Doctor, Patient, Admin } from "../Controller.js";
import jwt from "jsonwebtoken";
import config from "config";

const jwtAuth = async (req, res) => {
  try {
    const token = req.header("x-auth-token");
    if (!token) res.status(401).json({ msg: "No token received" });
    const decoded = jwt.verify(token, config.get("jwtSecret"));
    const result = await getAuthUser(decoded);
    res.status(200).json({
      message: "success",
      ...result,
      user: decoded.user,
    });
    return;
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

export default jwtAuth;

const getAuthUser = async ({ user, id }) => {
  let show;
  if (user === "admin") {
    show = await Admin.find({ _id: id }).select(["-__v", "-_id", "-password"]);
  } else if (user === "doctor") {
    show = await Doctor.find({ _id: id }).select(["-__v", "-_id", "-password"]);
  } else if (user === "patient") {
    show = await Patient.find({ _id: id }).select([
      "-__v",
      "-_id",
      "-password",
    ]);
  }
  return show;
};
