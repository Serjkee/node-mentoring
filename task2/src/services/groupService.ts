import { Group } from '../types/group';
import GroupModel from '../models/group';

class GroupService {
  getGroupById(id: string): Group {
    return GroupModel.findOne({ where: { id: id } }).then(item => item ? item : null);
  }

  getAllGroups(): Group[] {
    return GroupModel.findAll({}).then(data => data) 
  }

  createGroup(userObj: Group): Group[] {
    return GroupModel.create(userObj).then(item => item);
  }

  updateGroup(groupToUpdate: Group): Group[] {
    return GroupModel.update(groupToUpdate, { where: { id: groupToUpdate.id } }).then(item => item);
  }

  deleteGroup(id: string): any {
    return GroupModel.destroy({ where: { id: id } }).then(item => item);
  }
}

export default new GroupService();
