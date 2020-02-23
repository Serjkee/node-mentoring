import { User } from '../types/user';
import UserModel from '../models/user';
const Sequelize = require('Sequelize');
const Op = Sequelize.Op;

import { methodLogger } from '../utils/logger';

class CrudApi {
  getAllUsers(): User[] {
    methodLogger.log({ level: 'info', message: '', methodName: this.getAllUsers.name });
    return UserModel.findAll({}).then(data => data)
  }

  getUser(id: string): User[] {
    methodLogger.log({ level: 'info', message: '', methodName: this.getUser.name, methodArgs: id });
    return UserModel.findOne({where: {id: id}}).then(item => item ? [item] : null);
  }

  getAutoSeggestions(id: string, amount: number = 2): User[] {
    methodLogger.log({ level: 'info', message: '', methodName: this.getAutoSeggestions.name, methodArgs: { id, amount } });
    return UserModel.findAll({ where: { id: { [Op.regexp]: id}}, limit: amount}).then(item => item);
  }

  createUser(userObj: User): User[] {
    methodLogger.log({ level: 'info', message: '', methodName: this.createUser.name, methodArgs: userObj });
    return UserModel.create(userObj).then(item => item);
  }

  updateUser(userToUpdate: User): User[] {
    methodLogger.log({ level: 'info', message: '', methodName: this.updateUser.name, methodArgs: userToUpdate });
    return UserModel.update(userToUpdate, {where: {id: userToUpdate.id}}).then( item => item);
  }

  deleteUser(id: string): User[] {
    methodLogger.log({ level: 'info', message: '', methodName: this.deleteUser.name, methodArgs: id });
    return UserModel.update({isDeselected: true}, {where: {id: id}}).then(item => item);
  }
}

export default new CrudApi();
