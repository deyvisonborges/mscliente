import { Entity, Column } from 'typeorm';
import { EntityBase } from './EntityBase';

@Entity({ name: 'endereco' })
export default class DadosResidencia extends EntityBase {
  @Column({ type: 'varchar', length: 10 })
  numero_casa?: string;

  @Column({ type: 'varchar', length: 150 })
  logradouro?: string;

  @Column({ type: 'varchar', length: 100 })
  complemento?: string;

  @Column({ type: 'varchar', length: 80 })
  bairro?: string;

  @Column({ type: 'varchar', length: 100 })
  cidade?: string;

  @Column({ type: 'varchar', length: 25 })
  estado?: string;

  @Column({ type: 'numeric', length: 9 })
  cep?: number;
}
