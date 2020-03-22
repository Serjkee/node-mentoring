const dotenv = require('dotenv');
import GroupService from '../groupService';
import GroupModel from '../../models/group';

jest.mock('../../utils/logger');

describe('GroupService test', () => {
  test('Calls findAll method on GetAllGroups', () => {
    GroupModel.findAll = jest.fn(mock => Promise.resolve('mock'));

    GroupService.getAllGroups();
    expect(GroupModel.findAll).toHaveBeenCalled();
  });

  test('Calls findOne method on getting group with certain id', () => {
    const id = 'qwe';
    GroupModel.findOne = jest.fn(mock => Promise.resolve('mock'));

    GroupService.getGroupById(id);
    expect(GroupModel.findOne).toHaveBeenCalledTimes(1);
    expect(GroupModel.findOne).toHaveBeenCalledWith({ where: { id: id } })
  });
})
