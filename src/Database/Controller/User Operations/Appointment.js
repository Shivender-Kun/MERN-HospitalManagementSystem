import { Patient } from "../Controller.js";

// Update user information.
const appointment = async (req, res) => {
  try {
    const { userName, description } = req.body;

    const booking = await Patient.updateOne(
      { userName },
      {
        $set: {
          description,
          status: "Applied",
        },
      }
    );

    res.status(200).json({
      message: "success",
      ...booking,
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

export default appointment;
