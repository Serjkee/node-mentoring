import seq from "./index";
const Sequelize = require('Sequelize');

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

export default User;