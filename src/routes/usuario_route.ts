import { Router } from "express";
import {
  deleteUsuario,
  getUsuario,
  getUsuarios,
  postUsuario,
  putUsuario,
} from "../controllers/usuario_controller";

const router = Router();

router.get("/", getUsuarios);
router.get("/:ID_USUARIO", getUsuario);
router.post("/", postUsuario);
router.put("/:id", putUsuario);
router.delete("/:id", deleteUsuario);
router.post("/login")

export default router;
