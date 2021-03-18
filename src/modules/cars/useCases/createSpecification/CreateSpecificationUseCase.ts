import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";


interface IRequest{
    name: string;
    description: string;
}

class CreateSpecificationUseCase{
    constructor(private specificationRepository:ISpecificationRepository){}

    execute({description, name}:IRequest): void{
        
        const specificationExist = this.specificationRepository.findByName(name);

        if(specificationExist){
           throw new Error("Specification Exists!");
        }
    
        this.specificationRepository.create({name,description});
    }
}

export {CreateSpecificationUseCase}