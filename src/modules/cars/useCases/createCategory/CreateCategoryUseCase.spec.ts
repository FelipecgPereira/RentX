
import { CategoriesRepositoryInMemory } from "@modules/cars/repositories/in-memory/CategoriesRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";

import { CreateCategoryUseCase } from "./CreateCategoryUseCase";


let createCategoryUseCase: CreateCategoryUseCase;
let categorysRespositoryInMemory : CategoriesRepositoryInMemory;

describe("Create Categoryy",()=>{

    beforeEach(()=>{
        categorysRespositoryInMemory = new CategoriesRepositoryInMemory();
        createCategoryUseCase =  new CreateCategoryUseCase(categorysRespositoryInMemory)
    })

   it("should be able to create new category",async ()=>{
       const category = {
        name: "Category test",
        description: "Category Description Test"
       }
       await createCategoryUseCase.execute({
          name: category.name,
          description: category.description
       });

      const categoryCreated = await categorysRespositoryInMemory.findByName(category.name);

      expect(categoryCreated).toHaveProperty("id");
   });


   it("should not be able to create new category with name exists",async ()=>{
      const category = {
         name: "Category test",
         description: "Category Description Test"
        }
        await createCategoryUseCase.execute({
           name: category.name,
           description: category.description
        });
    
   await expect( 
      createCategoryUseCase.execute({
           name: category.name,
           description: category.description
        })
   
   ).rejects.toEqual(new AppError("Category Exists!"));
});
})