import { Response } from 'express';
import { Request } from 'express';
import { container } from 'tsyringe';
import { CreateCarUseCase } from "./CreateCarUseCase"

class CreateCarController{
    async handle(request: Request, response: Response): Promise<Response>{
        const {
            brand,
            category_id,
            daily_rate,
            description,
            fine_amount,
            license_plate,
            name
        } = request.body;
        const createCarUserCase = container.resolve(CreateCarUseCase);

        const car = await createCarUserCase.execute({
            brand,
            category_id,
            daily_rate,
            description,
            fine_amount,
            license_plate,
            name
        });

        return response.status(201).json(car)
    }
}

export{CreateCarController}