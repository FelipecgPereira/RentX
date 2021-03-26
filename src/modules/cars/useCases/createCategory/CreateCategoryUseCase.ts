import { AppError } from './../../../../errors/AppError';
import { inject, injectable } from "tsyringe";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

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