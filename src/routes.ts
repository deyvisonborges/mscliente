import * as express from 'express';
import DadosPessoaisController from './controllers/DadosPessoaisController';

const Route = express.Router();

Route.get('/clientes', DadosPessoaisController.save);
Route.get('/cliente/:id', DadosPessoaisController.save);
Route.post('/cliente/:id', DadosPessoaisController.save);
Route.delete('/cliente/:id', DadosPessoaisController.save);

export default Route;
