import { Request } from 'express';
import { Repository, getRepository } from 'typeorm';
import { Notifications } from '../utils/validators/Index';

// a minha classe virou um generic
export abstract class BaseController<T> extends Notifications {
  private _repository: Repository<T>;

  constructor(entity: any) {
    super();
    this._repository = getRepository<T>(entity);
  }

  // busca todos
  async all() {
    return this._repository.find();
  }

  // busca somente um
  async one(request: Request) {
    return this._repository.findOne(request.params.id);
  }

  // salva um
  async save(model: any) {
    if (model.uid) {
      let _modelInDB = await this._repository.findOne(model.uid); // se o modelo já existe no banco ...
      if (_modelInDB) {
        Object.assign(_modelInDB, model);
      }
    }
    if (this.valid()) {
      return this._repository.save(model);
    } else {
      return {
        status: 400,
        errors: this.allNotifications,
      };
    }
  }

  // remove somente um
  async remove(request: Request) {
    let uid: any = request.params.id;
    let model: any = await this._repository.find(uid);
    if (model) {
      model.deleted = true;
    }
    return this._repository.save(model);
  }
}
