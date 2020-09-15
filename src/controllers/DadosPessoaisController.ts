import { Request } from 'express';
import { DadosPessoais } from '../entities/DadosPessoais';
import { ControllerBase } from './ControllerBase';

export default class DadosPessoaisController extends ControllerBase<DadosPessoais> {
	constructor() {
		super(DadosPessoais);
	}

	async adicionarDadosPessoais(request: Request) {
		let _data = <DadosPessoais>request.body;
		super.IsRequired(_data.nome_cliente, 'Você precisa adicionar seu nome.');
		super.IsRequired(_data.rg, 'O RG é obrigatório.');
		super.IsRequired(_data.cpf, 'O CPF precisa ser informado.');
	}
}