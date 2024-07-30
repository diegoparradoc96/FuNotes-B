import express, { Application } from "express";
import cors from "cors";

import db from "./db/connection";

import userRoutes from "./routes/user_route";
import bookRoutes from "./routes/book_routes";

class Server {
  private app: Application;
  private port: string;
  private apiPaths = {
    usuarios: "/api/user",
    books: "/api/book",
  };

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "8084";

    // Metodos iniciales
    this.dbConnection();
    this.middlewares();
    this.routes();
  }

  async dbConnection() {
    try {
      await db.authenticate();
      console.log("database online");
    } catch (error: any) {
      throw new Error(error);
    }
  }

  middlewares() {
    // Cors
    this.app.use(cors());
    // Lectura del body
    this.app.use(express.json());
    // Carpeta publica
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.apiPaths.usuarios, userRoutes);
    this.app.use(this.apiPaths.books, bookRoutes);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("servidor corriendo en puerto: ", this.port);
    });
  }
}

export default Server;
