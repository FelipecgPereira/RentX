
import { ICategoriesRepository } from "@modules/cars/repositories/ICategoriesRepository";
import { AppError } from "@shared/errors/AppError";


import { inject, injectable } from "tsyringe";



interface IRequest{
    name: string;
    description: string;
}

@injectable()
class CreateCategoryUseCase{

    constructor(
        @inject("CategoriesRepository")
        private categoriesRepository:ICategoriesRepository){}

    async execute({description, name}:IRequest): Promise<void>{
        
        const categoryExist = await this.categoriesRepository.findByName(name);

        if(categoryExist){
           throw new AppError("Category Exists!");
        }
    
        this.categoriesRepository.create({name,description});
    }
}

export {CreateCategoryUseCase}