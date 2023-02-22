import { Router } from "express";
import { CreateRepositoryController } from "../modules/useCases/createRepository/CreateRepositoryController";
import { ListRepositoryController } from "../modules/useCases/listRepository/ListRepositoryController";

const repositoriesRoutes = Router();

const createRepositoryController = new CreateRepositoryController();

const listRepositoryController = new ListRepositoryController()


repositoriesRoutes.post("/", createRepositoryController.handle);

repositoriesRoutes.get("/", listRepositoryController.handle);

export { repositoriesRoutes }