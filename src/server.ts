import express from "express";
import swaggerUI from "swagger-ui-express";


import { router } from "./routes";
import swaggreFile from "./swagger.json";

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggreFile));

app.use(router);

app.listen(3333,()=>console.log('server is running!🚀'));