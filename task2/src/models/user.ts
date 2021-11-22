import seq from "./index";
const Sequelize = require('Sequelize');

const User = seq.define('user', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  login: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  age: {
    type: Sequelize.INTEGER
  },
  isDeselected: {
    type: Sequelize.BOOLEAN
  }
}, { timestamps: false, freezeTableName: true });

export default User;
