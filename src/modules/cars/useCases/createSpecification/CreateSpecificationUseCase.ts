import { AppError } from './../../../../errors/AppError';
import { inject, injectable } from "tsyringe";
import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";


interface IRequest{
    name: string;
    description: string;
}

@injectable()
class CreateSpecificationUseCase{
    
    constructor(
        @inject("SpecificationRepository")
        private specificationRepository:ISpecificationRepository
        ){}

    async execute({description, name}:IRequest): Promise<void>{
        
        const specificationExist = await this.specificationRepository.findByName(name);

        if(specificationExist){
           throw new AppError("Specification Exists!");
        }
    
        await this.specificationRepository.create({name,description});
    }
}

export {CreateSpecificationUseCase}