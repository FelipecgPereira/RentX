import { container } from "tsyringe";
import { ICategoriesRepository } from "../../src/modules/cars/repositories/ICategoriesRepository";
import { CategoriesRepository } from "../../src/modules/cars/repositories/implementations/CategoriesRepository";
import { ISpecificationRepository } from "../../src/modules/cars/repositories/ISpecificationRepository";
import { SpecificationRepository } from "../../src/modules/cars/repositories/implementations/SpecificationRepository";

container.registerSingleton<ICategoriesRepository>(
    "CategoriesRepository",
    CategoriesRepository
);
container.registerSingleton<ISpecificationRepository>(
    "SpecificationRepository",
    SpecificationRepository
);