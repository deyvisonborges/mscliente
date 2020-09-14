import * as express from 'express';
import 'reflect-metadata';
import loggerMiddleware from '../middlewares/logger';

const app = express();

app.use(loggerMiddleware);

app.get('/teste', (request, response) => {
  response.send('Hello teste!');
});
app.get('/', (request: express.Request, response: express.Response) => {
  response.send('Hello world!');
});

app.listen(5000);
