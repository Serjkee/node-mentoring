const passport = require('passport');
const cors = require('cors');
const dotenv = require('dotenv').config();
import * as express from 'express';
import userRouter from './routes/user.route';
import groupRouter from './routes/group.route';
import authRoute from './routes/auth.route';
import seq from './models/index';
import { passportUserAuth, verifyRouteAndJwtMiddleware } from './config/authConfig';

import { app, port } from './server';
import { httpLogger, httpErrorLogger, handleProcessError } from './utils/logger';

// Database connection
seq
.authenticate()
.then(() => {
  console.log('Connection has been established successfully.');
})
.catch(err => {
  console.error('Unable to connect to the database:', err);
});

// Some helpers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use pasport auth strategy
passport.initialize();
passport.use(passportUserAuth);

// HTTP Logger
app.use(httpLogger);

// Enable all cors requests
app.use(cors());

// Validate routes and JWT token
app.use(verifyRouteAndJwtMiddleware);

// Routes
app.get('/', (req, res) => {
  res.send('Home page');
})
app.use(authRoute);
app.use(userRouter);
app.use(groupRouter);

// HTTP error logger
app.use(httpErrorLogger);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
