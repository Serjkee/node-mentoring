import seq from "./index";
const Sequelize = require('Sequelize');

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

export default Group;