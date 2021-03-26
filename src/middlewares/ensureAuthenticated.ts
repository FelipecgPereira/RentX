import { AppError } from './../errors/AppError';
import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";

interface IPlayload{
    sub:string;
}

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction){
    const authHeader = request.headers.authorization;

    if(!authHeader){
        throw new AppError("Token missing",401);
    }

    const [,token] = authHeader.split(" ");

    try {
       const {sub: user_id} = verify(token,"d652eeeea9a382e2b37ad73e0a66b131") as IPlayload;
       
        const usersRepository = new UsersRepository();
        const user = usersRepository.findById(user_id);

        if(!user){
            throw new AppError("User does not Exists!",401);
        }
    
       request.user = {
           id: user_id
       }
       next();
    } catch (error) {
        throw new AppError("Invalid Token!",401);
    }

}