import express from "express";
import { ExampleRoutes } from "./v1/example/example.routes";



export class Routes {
  router = express.Router();

  path() {
    this.router.use('/example', new ExampleRoutes().router);

    return this.router;
  }
}
