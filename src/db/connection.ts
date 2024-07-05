import { Sequelize } from "sequelize";

const db = new Sequelize("phpmyadmin", "root", "", {
    host: "localhost",
    dialect: "mysql",
    //logging: false
});

export default db;