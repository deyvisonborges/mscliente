import { Entity, Column } from 'typeorm';
import { EntityBase } from './EntityBase';

@Entity({ name: 'contato' })
export class DadosContato extends EntityBase {
  @Column({ type: 'varchar', length: 15 })
  telefone_celular?: string;

  @Column({ type: 'varchar', length: 15 })
  telefone_fixo?: string;

  @Column({ type: 'varchar', length: 40 })
  email?: string;
}
