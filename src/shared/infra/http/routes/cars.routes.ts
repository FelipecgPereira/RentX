import { CreateCarController } from '@modules/cars/useCases/createCar/CreateCarController';
import { ListAvaibleCarsController } from '@modules/cars/useCases/listAvaibleCarsUseCase/ListAvaibleCarsController';
import { Router } from 'express';
import { ensureAdmin } from '../middlewares/ensureAdmin';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import {CreateCarSpecificationController} from "@modules/cars/useCases/createCarSpecification/CreateCarSpecificationController";


const carsRoutes = Router();

const createCarController = new CreateCarController();
const listAvaibleCarsController = new ListAvaibleCarsController();
const createCarSpecificationController= new CreateCarSpecificationController();

carsRoutes.post("/",ensureAuthenticated,ensureAdmin,createCarController.handle);

carsRoutes.post("/specifications/:id",ensureAuthenticated,ensureAdmin,createCarSpecificationController.handle);

carsRoutes.get("/available",listAvaibleCarsController.handle);


export{carsRoutes}