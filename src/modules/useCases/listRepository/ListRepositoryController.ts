import { Response, Request } from "express";
import { container } from "tsyringe";
import { ListRepositoryUseCase } from "./ListRepositoryUseCase";

class ListRepositoryController {
    async handle(request: Request, response: Response): Promise<Response> {

        const listRepositoryUseCase = container.resolve(ListRepositoryUseCase);

        const allRepositories = await listRepositoryUseCase.execute();

        return response.status(200).json(allRepositories);

    }
}

export { ListRepositoryController }