import express from "express";
import {
  addUser,
  deleteUser,
  editUser,
  getUser,
  getUsers,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/add", addUser);

router.get("/all", getUsers);

router.get("/:id", getUser);

router.post("/:id", editUser);

router.delete("/:id", deleteUser);

export default router;
