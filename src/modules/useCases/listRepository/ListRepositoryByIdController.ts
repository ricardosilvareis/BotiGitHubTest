import { Response, Request } from "express";
import { container } from "tsyringe";
import { ListRepositoryByIdUseCase } from "./ListRepositoryByIdUseCase";

class ListRepositoryByIdController {
    async handle(request: Request, response: Response): Promise<Response> {

        const { id } = request.params;

        const listRepositoryByIdUseCase = container.resolve(ListRepositoryByIdUseCase);

        const allRepositories = await listRepositoryByIdUseCase.execute(id);

        return response.status(200).send(allRepositories);

    }

}

export { ListRepositoryByIdController }