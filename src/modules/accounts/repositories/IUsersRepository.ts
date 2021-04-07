import { User } from '@modules/accounts/infra/typeorm/entities/Users';
import { ICreateUserDTO } from "../dtos/ICreateUsersDTO";



interface IUserRepository{

    create(data: ICreateUserDTO): Promise<void>;
    findByEmail(email: string): Promise<User>;
    findById(id: string): Promise<User>;

}

export {IUserRepository}