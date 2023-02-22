import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("repositories")
class RepositoryGitHub {
  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  url: string;

  @Column()
  stars:number

  @Column()
  language:string

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { RepositoryGitHub };