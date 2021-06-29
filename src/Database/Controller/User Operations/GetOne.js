import checkUser from "./checkUser.js";
import config from "config";
import jwt from "jsonwebtoken";
const getOne = async (req, res) => {
  try {
    const user = req.params.user;
    const { userName, password } = req.body;
    const userAuth = await checkUser(user, userName, password);
    userAuth[0].password = "protected";

    jwt.sign(
      {
        id: userAuth[0]._id,
        user,
      },
      config.get("jwtSecret"),
      // { expiresIn: 3600 },
      (err, token) => {
        if (err) throw err;
        res.status(200).json({
          token,
          message: "success",
          ...userAuth,
        });
      }
    );
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

export default getOne;
