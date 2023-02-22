import { Router } from "express";
import { repositoriesRoutes } from "./repositories.routes";

const router = Router();

router.use("/repositories", repositoriesRoutes);


export { router };