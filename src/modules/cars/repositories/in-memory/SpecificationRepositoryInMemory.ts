import { Specification } from "@modules/cars/infra/typeorm/entities/Specification";
import { ICreateSpecificationDTO, ISpecificationRepository } from "../ISpecificationRepository";

class SpecificationRepositoryInMemory implements ISpecificationRepository{
    
    specification : Specification[] =[];
    
    async findByName(name: string): Promise<Specification> {
        return this.specification.find(specification => specification.name === name);
    }
   async  list(): Promise<Specification[]> {
        return this.specification;
    }

    async create({ name, description }: ICreateSpecificationDTO): Promise<Specification> {
        const specification = new Specification();

        Object.assign(specification,{
            name,
            description
        });

        this.specification.push(specification);

        return specification;
    }
    async findByIds(ids: string[]): Promise<Specification[]> {
        const allSplecifications = this.specification
        .filter(specification =>ids.includes(specification.id)) ;

        return allSplecifications;
    }

}

export{SpecificationRepositoryInMemory}