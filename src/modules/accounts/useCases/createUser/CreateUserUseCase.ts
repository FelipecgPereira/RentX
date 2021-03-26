import { AppError } from './../../../../errors/AppError';
import { inject, injectable } from "tsyringe";
import {hash} from "bcrypt";
import { ICreateUserDTO } from "../../dtos/ICreateUsersDTO";
import {IUserRepository} from "../../repositories/IUsersRepository"

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