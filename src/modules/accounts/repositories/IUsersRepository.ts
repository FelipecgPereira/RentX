import { ICreateUserDTO } from "../dtos/ICreateUsersDTO";
import { User } from "../entities/Users";


interface IUserRepository{

    create(data: ICreateUserDTO): Promise<void>;
    findByEmail(email: string): Promise<User>;

}

export {IUserRepository}