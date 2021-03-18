import {Router} from 'express';
import { createSpecificationController } from '../modules/cars/useCases/createSpecification';

const specificationsRoutes = Router();

specificationsRoutes.post("/", (request, response)=>{
   return createSpecificationController.handle(request, response);
});

/**
 * TODO
 */
specificationsRoutes.get("/",(request, response)=>{
    const all =  null//specificationRepository.list();

    return response.json(all);
})


export {specificationsRoutes}