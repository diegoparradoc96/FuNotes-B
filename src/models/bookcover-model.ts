import { DataTypes } from "sequelize";

import db from "../db/connection";

const BookCover = db.define(
  "bookcover",
  {
    id_cover: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    url_cover: {
      type: DataTypes.STRING(2000),
      allowNull: false,
    },
    is_public_cover: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    id_user: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    //tableName: "user", // Especifica el nombre de la tabla aquí
    //timestamps: false, // Desabilitar fechas de creacion y actualizacion
  }
);

export { BookCover };
