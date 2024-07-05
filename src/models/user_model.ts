import { DataTypes } from "sequelize";

import db from "../db/connection";

const User = db.define(
  "user",
  {
    id_user: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: true,
    },
    email_user: {
      type: DataTypes.STRING(256),
      allowNull: true,
    },
    password_user: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    name_user: {
      type: DataTypes.STRING(256),
      allowNull: true,
    },
    cell_phone_user: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    snp_origen_user: {
      type: DataTypes.STRING(256),
      allowNull: true,
    },
    type_user: {
      type: DataTypes.TINYINT,
      allowNull: true,
    },
    status_user: {
      type: DataTypes.TINYINT,
      allowNull: true,
    },
    cell_phone_alarm: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    tableName: "user", // Especifica el nombre de la tabla aquí
    timestamps: false, // Desabilitar fechas de creacion y actualizacion
  }
);

export default User;
