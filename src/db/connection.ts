import { Sequelize } from "sequelize";

const db = new Sequelize("bethel", "root", "", {
    host: "localhost",
    dialect: "mysql",
    //logging: false
});

export default db;