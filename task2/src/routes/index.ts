import * as express from 'express';
import crudService from '../crudService/crudSrvice';
import userSchema from '../schema/userSchema';

const userRouter = express.Router();

userRouter.get('/', (req, res) => {
  res.send(crudService.getAllUsers());
});

userRouter.get('/user/:id', (req, res) => {
  const userFromDataset = crudService.getUser(req.params.id);
  res.send(userFromDataset.length ? userFromDataset : 'No user found!');
});

userRouter.get('/userAuto/:id', (req, res) => {
  const userSuggestions = crudService.getAutoSeggestions(req.params.id);
  res.send(userSuggestions);
});

userRouter.post('/user', (req, res) => {
  const { error } = userSchema.validate(req.body);
  if (error !== null) {
    res.status(400).send(error.details[0].message);
  } else {
    const user = crudService.createUser(req.body);
    res.send(user);
  }
});

userRouter.put('/user', (req, res) => {
  const { error } = userSchema.validate(req.body);
  if (error !== null) {
    res.status(400).send(error.details[0].message);
  } else {
    const user = crudService.updateUser(req.body);
    res.send(user);
  }
});

userRouter.delete('/user/:id', (req, res) => {
  crudService.deleteUser(req.params.id);
  res.send('Successfully deleted the user!');
});

export default userRouter;
