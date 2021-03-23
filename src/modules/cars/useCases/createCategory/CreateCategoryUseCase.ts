import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest{
    name: string;
    description: string;
}

class CreateCategoryUseCase{

    constructor(private categoriesRepository:ICategoriesRepository){}

    async execute({description, name}:IRequest): Promise<void>{
        
        const categoryExist = await this.categoriesRepository.findByName(name);

        if(categoryExist){
           throw new Error("Category Exists!");
        }
    
        this.categoriesRepository.create({name,description});
    }
}

export {CreateCategoryUseCase}