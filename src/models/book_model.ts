import { DataTypes } from "sequelize";

import db from "../db/connection";

const Barrio = db.define(
  "book",
  {
    id_book: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name_book: {
      type: DataTypes.STRING(50),
    },    
  },
  {
    //tableName: 'barrio', // Especifica el nombre de la tabla aquí"
    //timestamps: false, // Desabilitar fechas de creacion y actualizacion
  }
);

export default Barrio;
