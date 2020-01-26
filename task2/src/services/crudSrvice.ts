import { User } from '../types/userData';
import UserModel from '../models/user';
const Sequelize = require('Sequelize');
const Op = Sequelize.Op;

class CrudApi {
  getAllUsers(): User[] {
    return UserModel.findAll({}).then(data => data)
  }

  getUser(id: string): User[] {
    return UserModel.findOne({where: {id: id}}).then(item => item ? [item] : null);
  }

  getAutoSeggestions(id: string, amount: number = 2): User[] {
    return UserModel.findAll({ where: { id: { [Op.regexp]: id}}, limit: amount}).then(item => item);
  }

  createUser(userObj: User): User[] {
    return UserModel.create(userObj).then(item => item);
  }

  updateUser(userToUpdate: User): User[] {
    return UserModel.update(userToUpdate, {where: {id: userToUpdate.id}}).then( item => item);
  }

  deleteUser(id: string): User[] {
    return UserModel.update({isDeselected: true}, {where: {id: id}}).then(item => item);
  }
}

export default new CrudApi();
