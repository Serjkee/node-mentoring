import seq from './index';

import Group from './group';
import User from './user';

const UserGroup = seq.define('UserGroup', {}, { freezeTableName: true });

Group.belongsToMany(User, { through: UserGroup });
User.belongsToMany(Group, { through: UserGroup });

seq.sync({ force:true }).then(() => { console.log("Tables have been created"); }).catch(err=>console.log('this is an error', err));

export default UserGroup;
