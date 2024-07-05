import { DataTypes } from "sequelize";

import db from "../db/connection";

const User = db.define(
  "user",
  {
    id_user: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    email_user: {
      type: DataTypes.STRING(256),
    },
    password_user: {
      type: DataTypes.STRING(100),
    },
    name_user: {
      type: DataTypes.STRING(256),
    },
    cell_phone_user: {
      type: DataTypes.INTEGER,
    },
    snp_origen_user: {
      type: DataTypes.STRING(256),
    },
    type_user: {
      type: DataTypes.TINYINT,
    },
    status_user: {
      type: DataTypes.TINYINT,
    },
    cell_phone_alarm: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: false, // Desabilitar fechas de creacion y actualizacion
  }
);

export default User;
