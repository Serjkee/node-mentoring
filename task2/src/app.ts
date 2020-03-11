const passport = require('passport');
const jwt = require('jsonwebtoken')
import * as express from 'express';
import userRouter from './routes/user.route';
import groupRouter from './routes/group.route';
import seq from './models/index';
import { passportUserAuth, userAuth } from './services/authService'

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

passport.use(passportUserAuth);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(httpLogger);

app.get('/', (req, res) => {
  res.send('Home page');
})
app.post('/login', (req, res) => {
  const token = jwt.sign({ foo: 'qwe', }, 'secret', {expiresIn: 60 * 60});
  res.send(token);
})
app.use(userRouter);
app.use(groupRouter);

app.use(httpErrorLogger);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
