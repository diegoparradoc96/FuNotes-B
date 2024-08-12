import { Router } from "express";
import { getBooks, postBook, deleteBook } from "../controllers/book_controller";

const router = Router();

router.get("/", getBooks);
router.post("/", postBook);
router.delete("/:id_book", deleteBook);

export default router;
