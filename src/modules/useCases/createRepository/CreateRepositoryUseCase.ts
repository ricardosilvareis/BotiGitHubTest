import { inject, injectable } from "tsyringe";
import { ICreateRepositoriesRepository } from "../../entities/repositories/IRepositoriesRepository";
import axios from "axios"

interface IRequest {
  name: string;
  description: string;
  url: string;
  stars: number;
  language: string;
}

const URLs = ["https://api.github.com/repos/Torr7s/miami-client", "https://api.github.com/repos/ricardosilvareis/api-nestJs", "https://api.github.com/repos/ricardosilvareis/desafio01-ignite"]

@injectable()
class CreateRepositoryUseCase {

  constructor(
    @inject("RepositoriesRepository")
    private repositoriesRepository: ICreateRepositoriesRepository) { }

  private async fetchData(url: string) {
    const repository = await axios
      .get(url)
      .then(({ data }) => {
        console.log("LOGGUEEE", { data })
        return {
          name: data.name,
          description: data.description ?? 'Nenhuma descrição encontrada',
          url: data.html_url,
          stars: data.stargazers_count,
          language: data.language
        }
      });

    return repository;
  }

  public async execute(URLs: string[]): Promise<void> {
    const allData = await Promise.all(URLs.map(this.fetchData));

    allData.forEach(async (data) => {
      const { name, description, stars, url, language } = data;

      const thisData = await this.repositoriesRepository.findByName(name);

      if (!thisData) {
        await this.repositoriesRepository.create({
          name,
          description,
          stars,
          url,
          language
        });
      }
    });
  }
}

export { CreateRepositoryUseCase }

