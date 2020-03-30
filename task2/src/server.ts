import * as express from 'express';
import {handleProcessError} from './utils/logger';

export const app = express();
export const port = 3000;

process.on('uncaughtException', (err) => {
  handleProcessError.log({ level: 'error', message: 'this is an exception error' });
})

process.on('unhandledRejection', (error) => {
  handleProcessError.log({ level: 'error', message: 'this is unhandled promise error' });
})