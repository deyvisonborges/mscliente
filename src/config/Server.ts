import * as express from 'express';
import 'reflect-metadata';
import loggerMiddleware from '../middlewares/Logger';

const app = express();

app.use(loggerMiddleware);

app.get('/teste', (request, response) => {
  response.send('Hello teste!');
});

app.get('/', (request: express.Request, response: express.Response) => {
  response.send('Hello world!');
});

export default app;
