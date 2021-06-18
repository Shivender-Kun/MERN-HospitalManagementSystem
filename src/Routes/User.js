import express from "express";
import {
  addUser,
  getUser,
  deleteUser,
  status,
  Home,
  bookAppointment,
} from "../indexing.js";

const router = express.Router();

// Defining page routes.
router.get("/", Home);

router.post("/:user", addUser);

router.get("/:user", getUser);

router.post("/book/patient", bookAppointment);

router.put("/:status/:user/:userName", status);

router.delete("/:user", deleteUser);

export default router;
