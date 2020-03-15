import * as express from 'express';
import AuthService from '../services/authService';

const authRouter = express.Router();

authRouter.post('/login', async (req, res) => {
  const token = AuthService.authenticate(req.body);
  res.send({token});
});

export default authRouter;
