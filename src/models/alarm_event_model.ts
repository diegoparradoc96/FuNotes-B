import { DataTypes } from "sequelize";

import db from "../db/connection";

const AlarmEvent = db.define(
  "alarm_event",
  {
    id_event: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    activ_date_event: {
      type: DataTypes.DATE,
    },
    activ_hour_event: {
      type: DataTypes.DATE,
    },
    secad_event: {
      type: DataTypes.STRING(50),
    },
    active_event: {
      type: DataTypes.TINYINT,
    },
    latitude_event: {
      type: DataTypes.FLOAT,
    },
    longitude_event: {
      type: DataTypes.FLOAT,
    },
    cell_phone_alarm: {
      type: DataTypes.INTEGER,
    },
    id_user: {
      type: DataTypes.INTEGER,
    },
  },
  {
    tableName: 'alarm_event', // Especifica el nombre de la tabla aquí
    timestamps: false, // Desabilitar fechas de creacion y actualizacion
  }
);

export default AlarmEvent;
