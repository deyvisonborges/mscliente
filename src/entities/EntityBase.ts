import {
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

// comportamentos que todas as class terão, porque nao reutilizar? ;)
export abstract class EntityBase {
  // gera um código baseado na estrutura de hash
  @PrimaryGeneratedColumn('uuid')
  uid?: string;

  @Column({ default: true })
  actived?: boolean;

  @Column({ default: false })
  deleted?: boolean;

  @CreateDateColumn({ type: 'timestamp' })
  createAt?: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updateAt?: Date;
}
