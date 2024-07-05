import { DataTypes } from "sequelize";

import db from "../db/connection";

const Location = db.define(
  "location",
  {
    id_location: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    description_location: {
      type: DataTypes.STRING(50),
    },
    type_location: {
      type: DataTypes.STRING(20),
    },
    luge_codigo_location: {
      type: DataTypes.INTEGER,
    },
    dpto_location: {
      type: DataTypes.STRING(20),
    },
  },
  {
    timestamps: false, // Desabilitar fechas de creacion y actualizacion
  }
);

export default Location;
