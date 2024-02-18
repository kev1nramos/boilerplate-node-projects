import { config } from 'dotenv';
config();
import express from "express";
import cors from 'cors';
import { Routes } from "./routes";
import { errors } from "celebrate";
import { NotFoundResponse } from "./helpers/http";
import path from 'path';
import { errorMiddleware } from "./middleware/error.middleware";
import { PORT } from "./helpers/config";
import { fileURLToPath } from 'url';

export class AppServer {
    protected app: express.Application = express();

    constructor() {}

    createServer() {
        this.app.use(cors());

        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));

        this.app.all("/*", (req, res, next) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Request-Headers", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,Access-Control-Allow-Headers, Authorization, token, x-device-type, x-app-version, x-build-number, uuid,x-auth-token,X-L10N-Locale,x-auth-organization");
            res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
            next();
        });

        const __dirname = path.dirname(fileURLToPath(import.meta.url));
        this.app.use('/public/', express.static(path.join(__dirname + './../public/')));

        const routes = new Routes();
        this.app.use("/api/v1/", routes.path());

        this.app.use(errorMiddleware);
        this.app.use(errors()); // * JOI errors

        this.app.listen(PORT, () => {
            console.log("Server Running on port : " + PORT);
        });

        this.app.use((req, res) => {
            return NotFoundResponse(res, req.originalUrl + ' not found');
        });
    }
}