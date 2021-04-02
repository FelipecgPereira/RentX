import {Router} from 'express';

import { CreateSpecificationController } from '@modules/cars/useCases/createSpecification/CreateSpecificationController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { ensureAdmin } from '../middlewares/ensureAdmin';

const specificationsRoutes = Router();

const createSpecificationController =  new CreateSpecificationController();


specificationsRoutes.post("/",ensureAuthenticated,ensureAdmin, createSpecificationController.handle);

/**
 * TODO
 */
specificationsRoutes.get("/",(request, response)=>{
    const all =  null//specificationRepository.list();

    return response.json(all);
})


export {specificationsRoutes}