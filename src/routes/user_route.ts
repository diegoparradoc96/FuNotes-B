import { Router } from "express";
import {
  deleteUser,
  getUser,
  getUsers,
  postUser,
  putUser,
  login,
} from "../controllers/user_controller";

const router = Router();

router.get("/", getUsers);
router.get("/:id_user", getUser);
router.post("/", postUser);
router.put("/:id_user", putUser);
router.delete("/:id_user", deleteUser);
router.post("/login", login);

export default router;
