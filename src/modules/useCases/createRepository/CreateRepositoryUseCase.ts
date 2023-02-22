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

const URLs = ["https://api.github.com/repos/sudheerj/javascript-interview-questions", "https://api.github.com/repos/AtsushiSakai/PythonRobotics", "https://api.github.com/repos/socketio/socket.io", "https://api.github.com/repos/wix/react-native-navigation", "https://api.github.com/repos/animate-css/animate.css"]

@injectable()
class CreateRepositoryUseCase {

  constructor(
    @inject("RepositoriesRepository")
    private repositoriesRepository: ICreateRepositoriesRepository) { }

  private async fetchData(url: string) {
    const repository = await axios
      .get(url)
      .then(({ data }) => {
        return {
          name: data.name,
          description: data.description ?? 'Nenhuma descrição encontrada',
          url: data.html_url,
          stars: data.stargazers_count,
          language: data.language
        } as IRequest
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

