import { Request } from 'express';
import { DadosContato } from '../entities/DadosContato';
import { ControllerBase } from './ControllerBase';

class DadosContatoController extends ControllerBase<DadosContato> {
  constructor() {
    super(DadosContato);
  }

  async adicionarDadosContato(request: Request) {
    let _data = <DadosContato>request.body;
    super.IsRequired(
      _data.telefone_celular,
      'Você precisa adicionar pelo menos o número de celular.'
    );
    return super.save(_data);
  }
}

export default new DadosContatoController();
