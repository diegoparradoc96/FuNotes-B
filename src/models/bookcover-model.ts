import { DataTypes, Model, Optional, Sequelize  } from "sequelize";

import db from "../db/connection";

import {IBookCoverFixed} from "../types"

interface BookCoverCreationAttributes extends Optional<IBookCoverFixed, 'id_cover'> {}

const BookCover = db.define<Model<IBookCoverFixed, BookCoverCreationAttributes>>(
  "bookcover",
  {
    id_cover: {
      type: DataTypes.INTEGER,
      primaryKey: true,      
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
