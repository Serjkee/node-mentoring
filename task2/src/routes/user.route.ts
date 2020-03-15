import * as express from 'express';
import crudService from '../services/userService';

const userRouter = express.Router();

userRouter.get('/user', async (req, res) => {
  const allDataFromDb = await crudService.getAllUsers();
  res.send(allDataFromDb);
});

userRouter.get('/user/:id', async (req, res) => {
  const userFromDataset = await crudService.getUser(req.params.id);
  if (!userFromDataset) res.status(404);
  res.send(userFromDataset || 'No user found!');
});

userRouter.get('/userAuto/:id', async (req, res) => {
  const userSuggestions = await crudService.getAutoSeggestions(req.params.id);
  res.send(userSuggestions);
});

userRouter.post('/user', async ({body}, res) => {
  const createdUser = await crudService.createUser(body);
  res.send(createdUser);
});

userRouter.put('/user', async (req, res) => {
  const user = await crudService.updateUser(req.body);
  res.send(user);
});

userRouter.delete('/user/:id', async (req, res) => {
  await crudService.deleteUser(req.params.id);
  res.send('Successfully deleted the user!');
});

export default userRouter;
