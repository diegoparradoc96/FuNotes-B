import { Sequelize } from "sequelize";

import { Book, BookCover } from "../models";

const sequelize = new Sequelize({ dialect: "mysql" });

async function syncDatabase() {
  try {
    /* 
    force: true // elimina toda la tabla y vuelve a crearla
    alter: true // no elimina nada, en caso de que se agregaran nuevas columnas las agrega
    */
    await Book.sync({ alter: true });
    await BookCover.sync({ alter: true });
    console.log("Tabla creada correctamente.");
  } catch (error) {
    console.error("Error al sincronizar la base de datos:", error);
  } finally {
    await sequelize.close();
  }
}

export default syncDatabase;
