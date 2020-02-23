import * as express from 'express';
import userRouter from './routes/user.route';
import groupRouter from './routes/group.route';
import seq from './models/index';

import { app, port } from './server';
import { httpLogger, httpErrorLogger, handleProcessError } from './utils/logger';

seq
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(httpLogger);

app.get('/', (req, res) => {
  res.send('Home page');
})
app.use(userRouter);
app.use(groupRouter);

app.use(httpErrorLogger);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
