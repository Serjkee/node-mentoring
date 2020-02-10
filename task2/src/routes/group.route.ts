import * as express from 'express';
import groupService from '../services/groupService';

const groupRouter = express.Router();

groupRouter.get('/group/:id', async (req, res) => {
  const groupById = await groupService.getGroupById(req.params.id);
  res.send(groupById || 'No group found!');
});

groupRouter.get('/group', async (req, res) => {
  const allGroups = await groupService.getAllGroups();
  res.send(allGroups);
});

groupRouter.post('/group', async ({ body }, res) => {
  console.log(body);
  const createdGroup = await groupService.createGroup(body);
  res.send(createdGroup);
});

groupRouter.put('/group', async (req, res) => {
  const group = await groupService.updateGroup(req.body);
  res.send(group);
});

groupRouter.delete('/group/:id', async (req, res) => {
  await groupService.deleteGroup(req.params.id);
  res.send('Successfully deleted the group!');
});

export default groupRouter;
