import express from "express";
import swaggerUi from "swagger-ui-express"

import swaggerFile from "./swagger.json"
import cors from "cors";
import "./database"
import { router } from "./routes";
import "./shared/container";
const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use(router);

app.use((request, response, next) => {
    response.header("Access-Control-Allow-Origin", "*");
    app.use(cors());
    next();
})

app.listen(3333, () => console.log("Server is running"));
