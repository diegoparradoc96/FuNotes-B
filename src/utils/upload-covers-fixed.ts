import { BookCover } from "../models";

import { IBookCoverFixed } from "../types";

const bookCoversFixed: IBookCoverFixed[] = [
  {
    id_cover: 1,
    url_cover: "https://storage.cloud.google.com/cover-book-container/1.png",
    is_public_cover: true,
  },
  {
    id_cover: 2,
    url_cover: "https://storage.cloud.google.com/cover-book-container/2.png",
    is_public_cover: true,
  },
  {
    id_cover: 3,
    url_cover: "https://storage.cloud.google.com/cover-book-container/3.png",
    is_public_cover: true,
  },
  {
    id_cover: 4,
    url_cover: "https://storage.cloud.google.com/cover-book-container/4.png",
    is_public_cover: true,
  },
  {
    id_cover: 5,
    url_cover: "https://storage.cloud.google.com/cover-book-container/5.png",
    is_public_cover: true,
  },
  {
    id_cover: 6,
    url_cover: "https://storage.cloud.google.com/cover-book-container/6.png",
    is_public_cover: true,
  },
  {
    id_cover: 7,
    url_cover: "https://storage.cloud.google.com/cover-book-container/7.png",
    is_public_cover: true,
  },
  {
    id_cover: 8,
    url_cover: "https://storage.cloud.google.com/cover-book-container/8.png",
    is_public_cover: true,
  },
  {
    id_cover: 9,
    url_cover: "https://storage.cloud.google.com/cover-book-container/9.png",
    is_public_cover: true,
  },
];

const postBookCoverFixed = async (coverFixed: IBookCoverFixed): Promise<boolean> => {
  try {
    const bookCoverFixed = await BookCover.create(coverFixed);

    return true;
  } catch (error: any) {
    console.error("Error al guardar la cubierta de libro fija: ", error);
    throw new Error(error);
  }
};

const getBookCoverFixed = async (coverFixed: IBookCoverFixed) => {
  try {
    const bookCoverFixed = await BookCover.findOne({ where: { url_cover: coverFixed.url_cover } });

    if (!bookCoverFixed) {
      return false;
    }

    return true;
  } catch (error: any) {
    console.error("error al obtener la cubierta de libro fiija: ", error);
    throw new Error(error);
  }
};

export const postBookCoversFixed = async () => {
  try {
    for (let i = 0; i < bookCoversFixed.length; i++) {
      const existCoverFixed = await getBookCoverFixed(bookCoversFixed[i]);

      if (!existCoverFixed) {
        postBookCoverFixed(bookCoversFixed[i]);
        continue;
      }
    }
  } catch (error) {
    //error
    console.error("Error en el manejador de la iteracion del guardado de coverFixed");
  }
};
