import { Router } from "express";
import {getBookCovers} from "../controllers";

const router = Router();

router.get("/", getBookCovers);

export default router;
