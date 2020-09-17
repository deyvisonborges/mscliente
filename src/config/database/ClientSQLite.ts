import { ConnectionOptions, createConnection } from 'typeorm';

const options: ConnectionOptions = {
  type: 'sqlite',
  database: `${__dirname}/data/t_cliente.sqlite`,
  entities: [`src/entities/**/*.ts"`],
  migrations: ['src/migrations/**/*.ts'],
  subscribers: ['src/subscribers/**/*.ts'],
  logging: true,
};

export async function SqliteConnect() {
  const connection = await createConnection(options);
  return connection;
}
