import { Entity, Column } from 'typeorm';
import { EntityBase } from './EntityBase';

@Entity({ name: 'contato' })
export class DadosPessoais extends EntityBase {
  @Column({ type: 'varchar', length: 10 })
  nome_cliente?: string;

  @Column({ type: 'numeric', length: 14 })
  rg?: string;

  @Column({ type: 'numeric', length: 14 })
  cpf?: number;
}
