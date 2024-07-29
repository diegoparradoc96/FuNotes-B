import { Router } from "express";
import { getBooks, postBook } from "../controllers/book_controller";

const router = Router();

router.get("/", getBooks);
router.post("/", postBook);

export default router;
