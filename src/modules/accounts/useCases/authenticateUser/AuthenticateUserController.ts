import { container } from 'tsyringe';
import { Request, Response } from "express";
import { AuthenticateUserUseCase } from './AuthenticateUserUseCase';

class AutheticateUserController {
    async handle(request: Request, response:Response): Promise<Response>{
        const {email, password} = request.body;

        const authenticateUserCase = container.resolve(AuthenticateUserUseCase);

        const token = await authenticateUserCase.execute({email,password});

        return response.json(token);

    }   
}

export {AutheticateUserController}