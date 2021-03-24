import { ICreateUserDTO } from "../dtos/ICreateUsersDTO";


interface IUserRepository{

    create(data: ICreateUserDTO): Promise<void>;


}

export {IUserRepository}