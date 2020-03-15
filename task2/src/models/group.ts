import seq from "./index";
const Sequelize = require('Sequelize');

const Group = seq.define('group', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  permissions: {
    type: Sequelize.ARRAY
  }
}, { timestamps: false, freezeTableName: true });

export default Group;

