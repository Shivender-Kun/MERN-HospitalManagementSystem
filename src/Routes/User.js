import express from "express";
import { jwtAuth } from "../Database/Database.js";
import {
  bookAppointment,
  // deleteUser,
  addUser,
  getUser,
  status,
  Home,
} from "../indexing.js";

const router = express.Router();

// Defining page routes.

router.get("/", Home);
router.get("/:user", getUser);
router.post("/auth", jwtAuth);
router.post("/:user", addUser);
router.post("/book/patient", bookAppointment);
router.put("/:status/:user/:userName", status);

// router.delete("/:user", deleteUser);

export default router;
