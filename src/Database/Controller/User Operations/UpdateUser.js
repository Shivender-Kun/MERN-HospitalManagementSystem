import { Doctor, Patient, Admin } from "../Controller.js";
import checkOne from "./checkUser.js";

// Update user information.
const updateUser = async (req, res) => {
  try {
    const { user, userName } = req.params;
    const data = req.body;
    const check = await checkOne(user, userName, data.password);

    if (check) {
      const updating = await checkUser(user, userName, data);
      res.status(200).json({
        message: "success",
        ...updating,
      });
      return;
    }
    res.status(400).json({
      message: "failed",
      ...updating,
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

const checkUser = async (user, userName, data) => {
  let updatingUser;
  if (user === "doctor") {
    updatingUser = await Doctor.updateOne(
      { userName },
      {
        $set: data,
      }
    );
  } else if (user === "patient") {
    updatingUser = await Patient.updateOne(
      { userName },
      {
        $set: data,
      }
    );
  } else if (user === "admin") {
    updatingUser = await Admin.updateOne(
      { userName },
      {
        $set: data,
      }
    );
  }
  return updatingUser;
};

export default updateUser;

// const updateOne = (req, res) => {
//   if (req.query.approve) approve(req, res);
//   if (req.query.update) update(req, res);
// };

// const approve = async (req, res) => {
//   try {
//     const firstName = req.params.firstName;
//     const approvingDoc = await Doctors.updateOne(
//       { firstName },
//       {
//         $set: {
//           isWorking: true,
//           dateJoined: new Date(),
//         },
//       }
//     );
//     res.status(200).json(approvingDoc);
//   } catch (error) {
//     res.status(400).json(error.message);
//   }
// };
