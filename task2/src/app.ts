import * as express from 'express';

import userRouter from './routes/index';

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(userRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
