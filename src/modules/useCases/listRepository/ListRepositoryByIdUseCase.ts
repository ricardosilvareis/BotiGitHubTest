import { inject, injectable } from "tsyringe";
import { ICreateRepositoriesRepository } from "../../entities/repositories/IRepositoriesRepository";
import { RepositoryGitHub } from "../../entities/RepositoryGitHub";

@injectable()
class ListRepositoryByIdUseCase {
    constructor(@inject('RepositoriesRepository') private repositoriesRepository: ICreateRepositoriesRepository) { }

    async execute(id: string): Promise<RepositoryGitHub> {
        const repositories = await this.repositoriesRepository.findById(id);

        return repositories
    }

}

export { ListRepositoryByIdUseCase }