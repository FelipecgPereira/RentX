import { inject, injectable } from "tsyringe";
import {hash} from "bcrypt";


import { IUserRepository } from "@modules/accounts/repositories/IUsersRepository";
import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUsersDTO";
import { AppError } from "@shared/errors/AppError";



@injectable()
class CreateUserUseCase{    
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUserRepository
    ){}

    async execute({name,email,driver_license,password}:ICreateUserDTO):Promise<void>{


        const userAlreadyExists = await this.usersRepository.findByEmail(email);

        if(userAlreadyExists){
            
            throw new AppError("User already exist");
        }
        const passwordHash = await hash(password,8);


        await this.usersRepository.create({
            name,
            email,
            driver_license,
           password: passwordHash
        });

    }   

}

export{CreateUserUseCase}