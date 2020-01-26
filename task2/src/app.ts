import * as express from 'express';
import userRouter from './routes/index';
import seq from './models/index';

import { app, port } from './server';

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

app.use(userRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
