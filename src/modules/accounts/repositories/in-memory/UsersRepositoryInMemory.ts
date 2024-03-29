import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUsersDTO";
import { User } from "@modules/accounts/infra/typeorm/entities/Users";

import { IUserRepository } from "../IUsersRepository";


class UsersRepositoryInMemory implements IUserRepository{
    users: User[] = [];
    async create({driver_license, email,name,password}: ICreateUserDTO): Promise<void> {
        const user = new User();

        Object.assign(user,{
             driver_license,
             email,
             name,
             password
        });

        this.users.push(user);
    }
    async findByEmail(email: string): Promise<User> {
        const users = this.users.find((user)=>user.email === email);
        return users;
    }
    async findById(id: string): Promise<User> {
        const users = this.users.find((user)=>user.id === id);
        return users;
    }

}

export {UsersRepositoryInMemory}