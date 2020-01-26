const Sequelize = require('sequelize');
import { sequelizeConfigUri } from '../config/index';

const seq = new Sequelize(sequelizeConfigUri);

export default seq;