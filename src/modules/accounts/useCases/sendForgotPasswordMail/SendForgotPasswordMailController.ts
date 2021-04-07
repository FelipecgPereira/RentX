
import { container } from 'tsyringe';
import { Request,Response } from "express";
import { SendForgotPasswordMailUserCase } from './SendForgotPasswordMailUserCase';


class SendForgotPasswordMailController{
    async handle(request: Request, response: Response): Promise<Response>{

        const {email} = request.body;

        const sendForgotPasswordMailUserCase = container.resolve(SendForgotPasswordMailUserCase)


        await sendForgotPasswordMailUserCase.execute(email)
        return response.json();
    }
}

export{SendForgotPasswordMailController}