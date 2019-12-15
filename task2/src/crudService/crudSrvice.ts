import { User, userData } from '../mockData/userData';

class CrudApi {
  private data;

  constructor(data: User[]) {
    this.data = data;
  }

  getAllUsers(): User[] {
    return this.data;
  }

  getUser(id: string): User[] {
    return this.data.filter(item => item.id === id);
  }

  getAutoSeggestions(id: string, amount: number = 2): User[] {
    const userSuggestion = new RegExp(id);
    const fullListOfSuggestions: User[] = Array.from(this.data.filter(item => userSuggestion.test(item.id)));
    return fullListOfSuggestions.slice(0, amount);
  }

  createUser(userObj: User): User[] {
    this.data.push(userObj);
    return this.data;
  }

  updateUser(userToUpdate: User): User[] {
    const indexOfUser: number = this.data.findIndex((item, index) => item.id === userToUpdate.id ? index : false);
    if (indexOfUser === -1) {
      return this.data;
    }
    this.data.splice(indexOfUser, 1, userToUpdate);
    return this.data;
  }

  deleteUser(id: string): User[] {
    this.data.forEach(item => {
      if (item.id === id) {
        item.isDeselected = true;
      }
      return item;
    });
    return this.data;
  }
}

export default new CrudApi(userData);
