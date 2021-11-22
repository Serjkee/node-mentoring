import * as express from 'express';
import userRouter from './routes/user.route';
import groupRouter from './routes/group.route';
import seq from './models/index';

import { app, port } from './server';

import Group from './models/group';
import User from './models/user';
import UserGroup from './models/userGroup';

seq
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

console.log(Group, User, UserGroup)
// console.log(User.findAll({
//   include: [{
//     model: Group,
//     through: {
//       attributes: ['createdAt', 'startedAt', 'finishedAt'],
//       where: { id: 'asd' }
//     }
//   }]
// }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Home page');
})
app.use(userRouter);
app.use(groupRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
