import { Request, Response } from "express";

import { Book, BookCover } from "../models";

export const postBook = async (req: Request, res: Response) => {
  const { body } = req;

  try {
    const book = await Book.create({
      name_book: body.name_book,
      id_cover: body.id_cover,
    });

    res.status(201).json({
      message: "Libro creado con exito",
      book,
    });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({
      message: "Consulte con el administrador",
      error: error.message,
    });
  }
};

export const getBooks = async (req: Request, res: Response) => {
  try {
    const users = await Book.findAll({
      include: {
        model: BookCover,
        as: "bookcover",
      },
    });

    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      msg: "Consulte con el administrador",
    });
  }
};

export const deleteBook = async (req: Request, res: Response) => {
  const id_book = req.params.id_book;
  try {
    const bookDeleted = await Book.destroy({
      where: {
        id_book: id_book,
      },
    });

    if (bookDeleted) {
      res.status(200).send(`Libro con id_book: ${id_book} eliminado correctamente`);
    } else {
      res.status(404).send(`No se encontro el libro con id_book: ${id_book}`);
    }
  } catch (error) {
    res.status(500).send("Error al eliminar el libro.");
  }
};
