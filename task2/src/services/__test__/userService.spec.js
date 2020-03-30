import UserService from '../userService';
import UserModel from '../../models/user';

jest.mock('../../utils/logger');

describe('UserModel', () => {
  test('Calls findAll method on GetAllGroups', () => {
    UserModel.findAll = jest.fn(mock => Promise.resolve('mock'));

    UserService.getAllUsers();
    expect(UserModel.findAll).toHaveBeenCalled();
  });

  test('Calls findOne method on getting group with certain id', () => {
    const id = 'qwe';
    UserModel.findOne = jest.fn(mock => Promise.resolve('mock'));

    UserService.getUser(id);
    expect(UserModel.findOne).toHaveBeenCalledTimes(1);
    expect(UserModel.findOne).toHaveBeenCalledWith({
      where: {
        id,
      }
    })
  });
})
