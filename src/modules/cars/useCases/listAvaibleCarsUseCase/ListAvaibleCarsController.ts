import { container } from 'tsyringe';

import { Request, Response } from "express";
import { ListAvaibleCarsUseCase } from './ListAvaibleCarsUseCase';

class ListAvaibleCarsController{
    async handle(request: Request, response: Response): Promise<Response>{
        const {brand, name, category_id} =  request.query;

        const listAvaibleCarsUseCase = container.resolve(ListAvaibleCarsUseCase);

        const cars = await listAvaibleCarsUseCase.execute({
            brand:brand as string,
            name: name as string,
            category_id: category_id as string
        })

        return response.json(cars);


    }
}

export{ ListAvaibleCarsController }