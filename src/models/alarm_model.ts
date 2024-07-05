import { DataTypes } from "sequelize";

import db from "../db/connection";

const Alarm = db.define(
  "alarm",
  {
    cell_phone_alarm: {
      type: DataTypes.BIGINT,
      primaryKey: true,
    },
    adress_alarm: {
      type: DataTypes.STRING(100),
    },
    latitude_alarm: {
      type: DataTypes.FLOAT,
    },
    longitude_alarm: {
      type: DataTypes.FLOAT,
    },
    descrip_alarm: {
      type: DataTypes.STRING(256),
    },
    logo_alarm: {
      type: DataTypes.STRING(500),
    },
    type_alarm: {
      type: DataTypes.TINYINT,
    },
    id_location: {
      type: DataTypes.INTEGER,
    },
    cod_barrio: {
      type: DataTypes.INTEGER,
    },
    luge_cod_barrio: {
      type: DataTypes.INTEGER,
    },
  },
  {
    tableName: 'alarm', // Especifica el nombre de la tabla aquí
    timestamps: false, // Desabilitar fechas de creacion y actualizacion
  }
);

export default Alarm;
