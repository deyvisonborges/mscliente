import * as express from 'express';
import 'reflect-metadata';
import loggerMiddleware from '../middlewares/Logger';
import * as bodyParser from 'body-parser';
import Routes from '../routes';

const app = express();

app.use(bodyParser.json());
app.use(loggerMiddleware);
app.use(Routes);

export default app;
