import { CarsRepositoryInMemory } from '@modules/cars/repositories/in-memory/CarsRepositoryInMemory';
import {ListAvaibleCarsUseCase} from './ListAvaibleCarsUseCase';

let listAvaibleCarsUseCase: ListAvaibleCarsUseCase;
let carsRepository: CarsRepositoryInMemory;
describe("List Cars", ()=>{

    beforeEach(()=>{
        carsRepository =  new CarsRepositoryInMemory();
        listAvaibleCarsUseCase = new ListAvaibleCarsUseCase(carsRepository);
    })

    it("should be able to list all available cars",async ()=>{

       const car = await carsRepository.create({
            name:"Car 1",
            description:"Car description",
            license_plate:"ACD-4546",
            fine_amount:80,
            daily_rate:120.00,
            brand:"car brand",
            category_id:"category_id"
        })

        const cars = await listAvaibleCarsUseCase.execute({});

        expect(cars).toEqual([car]);
    });

    it("should be able to list all available cars by brand", async()=>{

       const car = await carsRepository.create({
        name:"Car 2",
        description:"Car description",
        license_plate:"ACD-4546",
        fine_amount:80,
        daily_rate:120.00,
        brand:"Car_brand_test",
        category_id:"category_id"
    });

    const cars = await listAvaibleCarsUseCase.execute({
        brand: "Car_brand_test"
    });

    expect(cars).toEqual([car]);
    })

    it("should be able to list all available cars by name", async()=>{

        const car = await carsRepository.create({
         name:"Car 3",
         description:"Car description",
         license_plate:"ACD-4546",
         fine_amount:80,
         daily_rate:120.00,
         brand:"Car_brand_test",
         category_id:"category_id"
     });
 
 
     const cars = await listAvaibleCarsUseCase.execute({
         name:"Car 3"
     });
 
     expect(cars).toEqual([car]);
     })

     it("should be able to list all available cars by category", async()=>{

        const car = await carsRepository.create({
         name:"Car 3",
         description:"Car description",
         license_plate:"ACD-4546",
         fine_amount:80,
         daily_rate:120.00,
         brand:"Car_brand_test",
         category_id:"123456789"
     });
 
 
     const cars = await listAvaibleCarsUseCase.execute({
        category_id:"123456789"
     });
 
     expect(cars).toEqual([car]);
     })
})