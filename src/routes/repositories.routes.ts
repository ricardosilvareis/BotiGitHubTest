import { Router } from "express";
import { CreateRepositoryController } from "../modules/useCases/createRepository/CreateRepositoryController";

const repositoriesRoutes = Router();

const createRepositoryController = new CreateRepositoryController();


repositoriesRoutes.post("/", createRepositoryController.handle);

export { repositoriesRoutes }