import { container } from 'tsyringe';
import { Request, Response } from "express";
import { ListRentalsByUserCase } from './ListRentalsByUserCase';


class ListRentalsByController{
    async handle(request: Request, response: Response): Promise<Response>{

        const {id} = request.user;

        const listRentalByUserCase =  container.resolve(ListRentalsByUserCase);

        const rentals = await listRentalByUserCase.execute(id);

        return response.json(rentals);
    }
}

export{ListRentalsByController}