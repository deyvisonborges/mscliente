import { Entity, Column } from 'typeorm';
import { EntityBase } from './EntityBase';

@Entity({ name: 'dados_conta' })
export class DadosConta extends EntityBase {
  @Column({ type: 'alphanum', length: 20 })
  user?: string;

  @Column({ type: 'varchar', length: 40 })
  email?: string;

  @Column({ type: 'varchar', length: 40 })
  senha?: string;
}
