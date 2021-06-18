import checkUser from "./checkUser.js";
import jwt from "jsonwebtoken";
const getOne = async (req, res) => {
  try {
    const user = req.params.user;
    const { userName, password } = req.body;
    const userAuth = await checkUser(user, userName, password);
    userAuth[0].password = "protected";
    userAuth
      ? res.status(200).json({
          message: "success",
          ...userAuth,
        })
      : res.status(404).json({ message: "failed1" });
  } catch (error) {
    res.status(400).json(error);
  }
};

export default getOne;
