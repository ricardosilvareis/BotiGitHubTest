import { getRepository, Repository } from "typeorm";
import { RepositoryGitHub } from "../../RepositoryGitHub";

import { ICreateRepositoriesRepository, ICreateRepositoryDTO } from "../IRepositoriesRepository";

class RepositoriesRepository implements ICreateRepositoriesRepository {
  private repository: Repository<RepositoryGitHub>;

  constructor() {
    this.repository = getRepository(RepositoryGitHub);
  }

  async create({ name, description, url, stars, language }: ICreateRepositoryDTO): Promise<void> {
    const repositoryGitHub = this.repository.create({ name, description, url, stars, language });

    await this.repository.save(repositoryGitHub);
  }

  async list(): Promise<RepositoryGitHub[]> {
    const repositoryGitHub = await this.repository.find();
    return repositoryGitHub;
  }

  async findByName(name: string): Promise<RepositoryGitHub> {
    const repositoryGitHub = await this.repository.findOne({ name });

    return repositoryGitHub;
  }

  async findById(id: string): Promise<RepositoryGitHub> {
    const repositoryGitHub = await this.repository.findOne({ id });

    return repositoryGitHub;
  }

}

export { RepositoriesRepository }