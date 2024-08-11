import { DataTypes } from "sequelize";

import db from "../db/connection";
/* models */
import { BookCover } from "../models";

const Book = db.define(
  "book",
  {
    id_book: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name_book: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },

    /* 🟥 foreing keys */
    id_cover: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: BookCover,
        key: "id_cover",
      },
    },
    bookcover_data: {
      type: DataTypes.VIRTUAL,
      get() {
        return this.getDataValue("bookcover"); // Obtiene la información de la relación
      },
    },
  },
  {
    //tableName: 'barrio', // Especifica el nombre de la tabla aquí"
    //timestamps: false, // Desabilitar fechas de creacion y actualizacion
  }
);

export { Book };
