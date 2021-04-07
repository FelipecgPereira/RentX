import { container } from 'tsyringe';
import { UsersTokensRepositoryInMemory } from '@modules/accounts/repositories/in-memory/UsersTokensRepositoryInMemory';
import { DayjsDateProvider } from '@shared/container/providers/DateProvider/implementations/DayjsDateProvider';
import { UsersRepositoryInMemory } from '@modules/accounts/repositories/in-memory/UsersRepositoryInMemory';
import { SendForgotPasswordMailUserCase } from "./SendForgotPasswordMailUserCase"
import {MailProviderInMemory} from '@shared/container/providers/MailProvider/in-memory/MailProviderInMemory'
import { AppError } from '@shared/errors/AppError';


let sendForgotPasswordMailUseCase : SendForgotPasswordMailUserCase;
let usersRepositoryInMemory : UsersRepositoryInMemory;
let usersTokensRepositoryInMemory: UsersTokensRepositoryInMemory;
let dateProvider: DayjsDateProvider;
let mailProviderInMemory : MailProviderInMemory;


describe("Send Forgot Mail",()=>{

    beforeEach(()=>{
        usersRepositoryInMemory= new UsersRepositoryInMemory();
        usersTokensRepositoryInMemory= new UsersTokensRepositoryInMemory();
        dateProvider = new DayjsDateProvider();
        mailProviderInMemory = new MailProviderInMemory();
        sendForgotPasswordMailUseCase = new SendForgotPasswordMailUserCase(
            usersRepositoryInMemory,
            usersTokensRepositoryInMemory,
            dateProvider,
            mailProviderInMemory

        );
    })

    it("should be able to send a forgot password mail to user",async  ()=>{
       const sendMail =  spyOn(mailProviderInMemory,"sendMail")
        
        await usersRepositoryInMemory.create({
            driver_license: "322550",
            email: "mobmub@receggu.is",
            name:"Sophia West",
            password: "1234"
        });

        await sendForgotPasswordMailUseCase.execute("mobmub@receggu.is");

        expect(sendMail).toHaveBeenCalled();

    });


    it("should be able to send a mail if user does not exists",async  ()=>{
        await expect(
           
         sendForgotPasswordMailUseCase.execute("shofi@receggu.is")
 
        ).rejects.toEqual(new AppError("User does not exists!"))
 
     });

     it("should be able to create an users token",async  ()=>{
        const generateTokenMail =  spyOn(usersTokensRepositoryInMemory,"create")
         
         await usersRepositoryInMemory.create({
             driver_license: "53987",
             email: "zaian@receggu.is",
             name:"Oliver West",
             password: "1234"
         });
 
         await sendForgotPasswordMailUseCase.execute("zaian@receggu.is");
 
         expect(generateTokenMail).toBeCalled();
 
     });

})