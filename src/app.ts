import dotenv from "dotenv";

import Server from "./server";
import updateDatabase from "./utils/updateDatabase";
import { postBookCoversFixed } from "./utils";
import "./db/assosiations"; // Importacion de las asociaciones para las relaciones

// migrar base de datos segun modelos
updateDatabase();

// subir cover-fixed a la base de datos en caso de que no existan
setTimeout(() => {
  postBookCoversFixed();
}, 2000);

// Configurar dotenv
dotenv.config();

const server = new Server();

server.listen();
