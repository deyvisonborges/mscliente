import * as express from 'express';
import DadosPessoaisController from './controllers/DadosPessoaisController';

const Route = express.Router();

Route.get('/clientes/dados-pessoais', DadosPessoaisController.save);
Route.get('/cliente/dados-pessoais/:id', DadosPessoaisController.save);
Route.post('/cliente/dados-pessoais/:id', DadosPessoaisController.save);
Route.put('/cliente/dados-pessoais/:id', DadosPessoaisController.save);
Route.delete('/cliente/dados-pessoais/:id', DadosPessoaisController.save);

Route.get('/clientes/dados-contato', DadosPessoaisController.save);
Route.get('/cliente/dados-contato/:id', DadosPessoaisController.save);
Route.post('/cliente/dados-contato/:id', DadosPessoaisController.save);
Route.put('/cliente/dados-contato/:id', DadosPessoaisController.save);
Route.delete('/cliente/dados-contato/:id', DadosPessoaisController.save);

export default Route;
