import { Response, Request } from "express";
import { container } from "tsyringe";
import { CreateRepositoryUseCase } from "./CreateRepositoryUseCase";

class CreateRepositoryController {
    async handle(request: Request, response: Response): Promise<Response> {
        const urls: string[] = request.body.repos_urls;

        const createRepositoryUseCase = container.resolve(CreateRepositoryUseCase);

        await createRepositoryUseCase.execute(urls);

        return response.status(201).send();
    }
}

export { CreateRepositoryController }