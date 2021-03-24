import { container } from 'tsyringe';
import { Request, Response } from 'express';
import {CreateUserUseCase} from './CreateUserUseCase'



class CreateUserControler{  

    async handle(request: Request, response:Response): Promise<Response>{
        const {name,username,email,driver_license,password}= request.body;

        const createUserUseCase = container.resolve(CreateUserUseCase);

        createUserUseCase.execute({name,username,email,driver_license,password});

        return response.status(201).send();

    }

}

export{CreateUserControler}