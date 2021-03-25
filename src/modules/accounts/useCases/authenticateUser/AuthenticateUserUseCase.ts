import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { injectable } from 'tsyringe';
import { inject } from 'tsyringe';
import { IUserRepository } from '../../repositories/IUsersRepository';


interface IRequest{
    email: string,
    password: string
}

interface IResponse{
    user:{
        name: string,
        email: string
    },
    token: string
}

@injectable()
class AuthenticateUserUseCase{

    constructor(
        @inject("UsersRepository")
        private usersRepository: IUserRepository
    ){}

    async execute({email, password}:IRequest):Promise<IResponse>{
        const user = await this.usersRepository.findByEmail(email);

        if(!user){
            throw new Error("Email or Passowrd incorrent!");
        }
        const passwordMatch =await compare(password,user.password);
        
        if(!passwordMatch){
            throw new Error("Email or Passowrd incorrent!");
        }

        const token = sign({},"d652eeeea9a382e2b37ad73e0a66b131",{
            subject: user.id,
            expiresIn: "1d"
        });

        const tokenReturn: IResponse={
            token,
            user:{
                name: user.name,
                email: user.email
            }
        }

        return tokenReturn;
    }
}

export {AuthenticateUserUseCase}