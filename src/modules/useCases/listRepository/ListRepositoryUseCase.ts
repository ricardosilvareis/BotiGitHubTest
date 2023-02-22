import { inject, injectable } from "tsyringe";
import { ICreateRepositoriesRepository } from "../../entities/repositories/IRepositoriesRepository"
import { RepositoryGitHub } from "../../entities/RepositoryGitHub"

@injectable()
class ListRepositoryUseCase {

    constructor(@inject('RepositoriesRepository') private repositoriesRepository: ICreateRepositoriesRepository) { }

    async execute(): Promise<RepositoryGitHub[]> {
        const repositories = await this.repositoriesRepository.list();

        return repositories
    }

}

export { ListRepositoryUseCase }