
import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUsersDTO";
import { UsersRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UsersRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";

import { CreateUserUseCase } from "../createUser/CreateUserUseCase";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";




let authenticateUserCase : AuthenticateUserUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;
let createUserUseCase: CreateUserUseCase;

describe("Authenticate User",()=>{
    
    beforeEach(()=>{
        usersRepositoryInMemory= new UsersRepositoryInMemory();
        authenticateUserCase =  new AuthenticateUserUseCase(usersRepositoryInMemory);
        createUserUseCase =  new CreateUserUseCase(usersRepositoryInMemory);
    })

    it("should be able to authenticate an user",async ()=>{
        const user: ICreateUserDTO ={
            driver_license: "000345432",
            email:"userTest@test.com",
            password:"1234",
            name:"Test User"
        }

        await createUserUseCase.execute(user);

        const result = await authenticateUserCase.execute({
            email: user.email,
            password: user.password
        })

        expect(result).toHaveProperty("token");
    });

    it("should be able authenticate  an none existent user", ()=>{
        expect(async ()=>{
            await authenticateUserCase.execute({
                email:"false@email.com",
                password:"1234"
            })
        }).rejects.toBeInstanceOf(AppError)
    });


    it("should be able authenticate  with incorrect password", ()=>{
        expect(async ()=>{
            const user: ICreateUserDTO ={
                driver_license: "000345432",
                email:"userTest@test.com",
                password:"1234",
                name:"Test User"
            }
    
            await createUserUseCase.execute(user);
    
            await authenticateUserCase.execute({
                email:user.email,
                password:"incorretPassword"
            })
        }).rejects.toBeInstanceOf(AppError)
    });
})