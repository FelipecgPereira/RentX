import { AppError } from './errors/AppError';
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import swaggerUI from "swagger-ui-express";
import "./database";

import "../shared/container";
import { router } from "./routes";
import swaggreFile from "./swagger.json";


const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggreFile));

app.use(router);

app.use((err:Error,request:Request,response:Response, next:NextFunction)=>{
    if(err instanceof AppError){
        return response.status(err.statusCode).json({
            message: err.message
        });
    }

    return response.status(500).json({
        status:"error",
        message: `Internal server error - ${err.message}`
    })
})

app.listen(3333,()=>console.log('server is running!🚀'));