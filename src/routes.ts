import * as express from 'express';
import DadosPessoaisController from './controllers/DadosPessoaisController';

const Route = express.Router();

Route.get('/cliente/:id/dados-pessoais', DadosPessoaisController.save);
Route.post('/cliente/:id/dados-pessoais', DadosPessoaisController.save);
Route.put('/cliente/:id/dados-pessoais', DadosPessoaisController.save);
Route.delete('/cliente/:id/dados-pessoais', DadosPessoaisController.save);

Route.get('/clientes/dados-contato', DadosPessoaisController.save);
Route.get('/cliente/:id/dados-contato', DadosPessoaisController.save);
Route.post('/cliente/:id/dados-contato', DadosPessoaisController.save);
Route.put('/cliente/:id/dados-contato', DadosPessoaisController.save);
Route.delete('/cliente/:id/dados-contato', DadosPessoaisController.save);

export default Route;
