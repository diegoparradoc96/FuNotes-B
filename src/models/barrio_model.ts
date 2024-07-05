import { DataTypes } from "sequelize";

import db from "../db/connection";

const Barrio = db.define(
  "barrio",
  {
    cod_barrio: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    descrip_barrio: {
      type: DataTypes.STRING(50),
    },
    luge_cod_barrio: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: false, // Desabilitar fechas de creacion y actualizacion
  }
);

export default Barrio;
