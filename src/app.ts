import dotenv from "dotenv";

import Server from "./server";
import updateDatabase from "./utils/updateDatabase";

// migrar base de datos segun modelos
updateDatabase();

// Configurar dotenv
dotenv.config();

const server = new Server();

server.listen();