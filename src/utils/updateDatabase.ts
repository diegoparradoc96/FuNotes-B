import { Sequelize } from "sequelize";

import book_model from "../models/user_model";

const sequelize = new Sequelize();

async function syncDatabase() {
  try {
    await book_model.sync({ force: true });
    console.log("Tabla creada correctamente.");
  } catch (error) {
    console.error("Error al sincronizar la base de datos:", error);
  } finally {
    await sequelize.close();
  }
}

export default syncDatabase;