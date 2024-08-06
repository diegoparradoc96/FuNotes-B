import { Request, Response } from "express";

import Book from "../models/book_model";

export const postBook = async (req: Request, res: Response) => {
  const { body } = req;

  console.log("el body: ", body);
  try {
    const book = await Book.create(body);

    res.json(true);
  } catch (error) {
    // error
    console.error(error);
    res.status(500).json({
      msg: "Consulte con el administrador",
    });
  }
};

export const getBooks = async (req: Request, res: Response) => {
  try {
    const users = await Book.findAll();

    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      msg: "Consulte con el administrador",
    });
  }
};
