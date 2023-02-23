import { Router } from "express";
import { CreateRepositoryController } from "../modules/useCases/createRepository/CreateRepositoryController";
import { ListRepositoryByIdController } from "../modules/useCases/listRepository/ListRepositoryByIdController";
import { ListRepositoryController } from "../modules/useCases/listRepository/ListRepositoryController";

const repositoriesRoutes = Router();

const createRepositoryController = new CreateRepositoryController();

const listRepositoryController = new ListRepositoryController()

const listRepositoryByIdController = new ListRepositoryByIdController()


repositoriesRoutes.post("/", createRepositoryController.handle);

repositoriesRoutes.get("/", listRepositoryController.handle);
repositoriesRoutes.get("/:id", listRepositoryByIdController.handle);


export { repositoriesRoutes }