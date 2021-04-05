import { CreateRentalController } from "@modules/rentals/usesCases/createRental/CreateRentalController";
import { DevolutionRentalController } from "@modules/rentals/usesCases/devolutionRental/DevolutionRentalController";
import { ListRentalsByController } from "@modules/rentals/usesCases/listRentalsByUser/ListRentalsByController";
import {Router} from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const rentalRoutes = Router();


const createRentalController = new CreateRentalController();
const devolutionRentalController = new DevolutionRentalController();
const listRentalsByController = new ListRentalsByController();

rentalRoutes.post("/",ensureAuthenticated,createRentalController.handle);

rentalRoutes.post("/devolution/:id",ensureAuthenticated,devolutionRentalController.handle);

rentalRoutes.get("/user",ensureAuthenticated,listRentalsByController.handle);

export{rentalRoutes}
