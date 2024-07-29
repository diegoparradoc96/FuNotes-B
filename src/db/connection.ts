import { Sequelize } from "sequelize";

const db = new Sequelize("funotes", "root", "", {
    host: "localhost",
    dialect: "mysql",
    //logging: false
});

export default db;