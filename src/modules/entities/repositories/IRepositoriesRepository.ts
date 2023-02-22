import { RepositoryGitHub } from "../RepositoryGitHub";


interface ICreateRepositoryDTO {
    name: string;
    description: string;
    url: string;
    stars: number
    language: string;
}

interface ICreateRepositoriesRepository {
    findByName(id: string): Promise<RepositoryGitHub>
    list(): Promise<RepositoryGitHub[]>
    create({ name, description, url, stars, language }: ICreateRepositoryDTO): Promise<void>
}

export { ICreateRepositoryDTO, ICreateRepositoriesRepository }
