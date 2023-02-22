import { container } from "tsyringe";

import { RepositoriesRepository } from "../../modules/entities/repositories/implementations/RepositoriesRepository";
import { ICreateRepositoriesRepository } from "../../modules/entities/repositories/IRepositoriesRepository";

container.registerSingleton<ICreateRepositoriesRepository>("RepositoriesRepository", RepositoriesRepository)