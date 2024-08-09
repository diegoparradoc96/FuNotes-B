import { Sequelize } from "sequelize";

import { Book, BookCover } from "../models";

const sequelize = new Sequelize({ dialect: "mysql" });

async function syncDatabase() {
  try {
    await Book.sync({ force: true });
    await BookCover.sync({ force: true });
    console.log("Tabla creada correctamente.");
  } catch (error) {
    console.error("Error al sincronizar la base de datos:", error);
  } finally {
    await sequelize.close();
  }
}

export default syncDatabase;
