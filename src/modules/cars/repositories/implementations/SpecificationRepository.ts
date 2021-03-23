import { Specification } from "../../entities/Specification";
import { ISpecificationRepository,ICreateSpecificationDTO } from "../ISpecificationRepository";

class SpecificationRepository implements ISpecificationRepository{
    private specifications: Specification[];

    private static INSTACE: SpecificationRepository;

    private constructor(){
        this.specifications = [];
    }

    public static getInstance(): SpecificationRepository{
        if(!SpecificationRepository.INSTACE){
            SpecificationRepository.INSTACE= new SpecificationRepository();
        }

        return SpecificationRepository.INSTACE;
    }


    create({name, description}: ICreateSpecificationDTO): void{
        const specification= new Specification();
        Object.assign(specification,{
            name,
            description,
            created_at: new Date()
        })
    
        this.specifications.push(specification);
    
    };


    list():Specification[]{
        return this.specifications;
    }

    findByName(name:string): Specification{
        const specification = this.specifications.find(specification => specification.name===name);
        return specification

    }
}

export {SpecificationRepository}