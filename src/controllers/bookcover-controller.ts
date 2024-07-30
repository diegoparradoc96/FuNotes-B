import { Request, Response } from "express";

import { BookCover } from "../models";

// export const postBook = async (req: Request, res: Response) => {
//   const { body } = req;

//   try {
//     const book = await BookCover.create(body);

//     res.json(true);
//   } catch (error) {
//     // error
//     console.error(error);
//     res.status(500).json({
//       msg: "Consulte con el administrador",
//     });
//   }
// };

export const getBookCovers = async (req: Request, res: Response) => {
  try {
    const bookCovers = await BookCover.findAll();

    res.json(bookCovers);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      msg: "Consulte con el administrador",
    });
  }
};
