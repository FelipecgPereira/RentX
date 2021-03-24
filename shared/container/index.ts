import { container } from "tsyringe";
import { ICategoriesRepository } from "../../src/modules/cars/repositories/ICategoriesRepository";
import { CategoriesRepository } from "../../src/modules/cars/repositories/implementations/CategoriesRepository";
import { ISpecificationRepository } from "../../src/modules/cars/repositories/ISpecificationRepository";
import { SpecificationRepository } from "../../src/modules/cars/repositories/implementations/SpecificationRepository";
import { IUserRepository } from "../../src/modules/accounts/repositories/IUsersRepository";
import { UsersRepository } from "../../src/modules/accounts/repositories/implementations/UsersRepository";

container.registerSingleton<ICategoriesRepository>(
    "CategoriesRepository",
    CategoriesRepository
);
container.registerSingleton<ISpecificationRepository>(
    "SpecificationRepository",
    SpecificationRepository
);

container.registerSingleton<IUserRepository>(
    "UsersRepository",
    UsersRepository
);