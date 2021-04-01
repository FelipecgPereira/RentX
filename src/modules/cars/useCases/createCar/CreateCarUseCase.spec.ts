import { CarsRepositoryInMemory } from "@modules/cars/in-memory/CarsRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";
import { CreateCarUseCase } from "./CreateCarUseCase"

let createCarUseCase : CreateCarUseCase;
let carsRepository: CarsRepositoryInMemory;

describe("Create Car",()=>{

    beforeEach(()=>{
        carsRepository = new CarsRepositoryInMemory();
        createCarUseCase = new CreateCarUseCase(carsRepository);
        
    })
    
    it("should be able to create a new car",async ()=>{
       const car = await createCarUseCase.execute({
            name: "Name Car",
            description:"Description Car",
            daily_rate:100,
            license_plate:"DEF-5678",
            fine_amount:60,
            brand:"Brand",
            category_id:"category"
        });

        expect(car).toHaveProperty("id");
    })

    it("should be able to create a car with exist license plate",()=>{
        expect(async ()=>{
            await createCarUseCase.execute({
                name: "Car 1",
                description:"Description Car",
                daily_rate:100,
                license_plate:"DEF-5678",
                fine_amount:60,
                brand:"Brand",
                category_id:"category"
            });

            await createCarUseCase.execute({
                name: "Car 2",
                description:"Description Car",
                daily_rate:100,
                license_plate:"DEF-5678",
                fine_amount:60,
                brand:"Brand",
                category_id:"category"
            });
        }).rejects.toBeInstanceOf(AppError);
    })

    it("should be able to create a car with avaible true by default",async()=>{
        const car = await createCarUseCase.execute({
            name: "Car Avaible",
            description:"Description Car",
            daily_rate:100,
            license_plate:"DEF-5678",
            fine_amount:60,
            brand:"Brand",
            category_id:"category"
        });

        expect(car.available).toBe(true);
    })
})