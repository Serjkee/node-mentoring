import seq from "./index";
const Sequelize = require('Sequelize');

import UserGroup from './userGroup';

const Model = Sequelize.Model;
class Group extends Model { }
Group.init({
  id: {
    type: Sequelize.STRING,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING
  },
  permissions: {
    type: Sequelize.ARRAY
  }
}, {
  sequelize: seq,
  tableName: 'group',
  modelName: 'group',
  timestamps: false
});

Group.associate = model => {
  Group.belongsToMany(model.User, { through: UserGroup });
}

export default Group;