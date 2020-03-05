import seq from "./index";
const Sequelize = require('Sequelize');

import UserGroup from './userGroup';

const Model = Sequelize.Model;
class User extends Model { }
User.init({
  id: {
    type: Sequelize.STRING,
    primaryKey: true,
    allowNull: false
  },
  login: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  },
  age: {
    type: Sequelize.INTEGER
  },
  isDeselected: {
    type: Sequelize.BOOLEAN
  }
}, {
  sequelize: seq,
  tableName: 'user',
  modelName: 'user',
  timestamps: false
});

User.associate = model => {
  User.belongsToMany(model.Group, { through: UserGroup });
}

export default User;