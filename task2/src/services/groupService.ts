import { Group } from '../types/group';
import GroupModel from '../models/group';

import { methodLogger } from '../utils/logger';

class GroupService {
  getGroupById(id: string): Group {
    methodLogger.log({ level: 'info', message: '', methodName: this.getGroupById.name, methodArgs: id});
    return GroupModel.findOne({ where: { id: id } }).then(item => item ? item : null);
  }
  
  getAllGroups(): Group[] {
    methodLogger.log({level: 'info', message: '', methodName: this.getAllGroups.name});
    return GroupModel.findAll({}).then(data => data) 
  }

  createGroup(userObj: Group): Group[] {
    methodLogger.log({ level: 'info', message: '', methodName: this.createGroup.name, methodArgs: userObj });
    return GroupModel.create(userObj).then(item => item);
  }

  updateGroup(groupToUpdate: Group): Group[] {
    methodLogger.log({ level: 'info', message: '', methodName: this.updateGroup.name, methodArgs: groupToUpdate });
    return GroupModel.update(groupToUpdate, { where: { id: groupToUpdate.id } }).then(item => item);
  }

  deleteGroup(id: string): any {
    methodLogger.log({ level: 'info', message: '', methodName: this.deleteGroup.name, methodArgs: id });
    return GroupModel.destroy({ where: { id: id } }).then(item => item);
  }
}

export default new GroupService();
