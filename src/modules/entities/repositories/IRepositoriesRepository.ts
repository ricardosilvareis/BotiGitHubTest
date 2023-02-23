import { RepositoryGitHub } from "../RepositoryGitHub";


interface ICreateRepositoryDTO {
    name: string;
    description: string;
    url: string;
    stars: number
    language: string;
}

interface ICreateRepositoriesRepository {
    findByName(name: string): Promise<RepositoryGitHub>
    findById(id: string): Promise<RepositoryGitHub>
    list(): Promise<RepositoryGitHub[]>
    create({ name, description, url, stars, language }: ICreateRepositoryDTO): Promise<void>
}

export { ICreateRepositoryDTO, ICreateRepositoriesRepository }
