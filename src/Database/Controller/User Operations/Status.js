import { Doctor, Patient } from "../Controller.js";

const Status = async (req, res) => {
  const { status, user, userName } = req.params;
  try {
    let update;
    if (status === "approve") {
      update = await approve(user, userName);
    } else {
      update = await hold(user, userName);
    }

    res.status(200).json({
      message: "success",
      ...update,
    });
    return;
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const approve = async (user, userName) => {
  let updatingUser;
  if (user === "doctor") {
    updatingUser = await Doctor.updateOne(
      { userName },
      {
        $set: {
          status: "Working",
        },
      }
    );
  } else if (user === "patient") {
    updatingUser = await Patient.updateOne(
      { userName },
      {
        $set: {
          status: new Date().toLocaleDateString(),
        },
      }
    );
  }
  return updatingUser;
};

// Update user information.

const hold = async (user, userName) => {
  let updatingUser;
  if (user === "doctor") {
    updatingUser = await Doctor.updateOne(
      { userName },
      {
        $set: {
          status: "On Hold",
        },
      }
    );
  } else if (user === "patient") {
    updatingUser = await Patient.updateOne(
      { userName },
      {
        $set: {
          status: "On Hold",
        },
      }
    );
  }
  return updatingUser;
};

export default Status;
