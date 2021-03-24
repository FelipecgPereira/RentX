import { inject, injectable } from "tsyringe";
import { ICreateUserDTO } from "../../dtos/ICreateUsersDTO";
import {IUserRepository} from "../../repositories/IUsersRepository"

@injectable()
class CreateUserUseCase{    
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUserRepository
    ){}

    async execute({name,username,email,driver_license,password}:ICreateUserDTO):Promise<void>{

        await this.usersRepository.create({
            name,
            username,
            email,
            driver_license,
            password
        });

    }   

}

export{CreateUserUseCase}