import express from "express";
import {
  bookAppointment,
  addUser,
  getUser,
  status,
  Home,
} from "../indexing.js";

const router = express.Router();

// Defining page routes.

router.get("/", Home);
router.get("/:user", getUser);
router.post("/:user", addUser);
router.post("/book/patient", bookAppointment);
router.put("/:status/:user/:userName", status);

export default router;
