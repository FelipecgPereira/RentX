import { CreateCarController } from '@modules/cars/useCases/createCar/CreateCarController';
import { ListAvaibleCarsController } from '@modules/cars/useCases/listAvaibleCarsUseCase/ListAvaibleCarsController';
import { Router } from 'express';
import { ensureAdmin } from '../middlewares/ensureAdmin';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';


const carsRoutes = Router();

const createCarController = new CreateCarController();
const listAvaibleCarsController = new ListAvaibleCarsController();

carsRoutes.post("/",ensureAuthenticated,ensureAdmin,createCarController.handle);

carsRoutes.get("/available",listAvaibleCarsController.handle);

export{carsRoutes}