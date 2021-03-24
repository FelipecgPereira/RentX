import {Router} from 'express';
import { CreateSpecificationController } from '../modules/cars/useCases/createSpecification/CreateSpecificationController';

const specificationsRoutes = Router();

const createSpecificationController =  new CreateSpecificationController();

specificationsRoutes.post("/", createSpecificationController.handle);

/**
 * TODO
 */
specificationsRoutes.get("/",(request, response)=>{
    const all =  null//specificationRepository.list();

    return response.json(all);
})


export {specificationsRoutes}