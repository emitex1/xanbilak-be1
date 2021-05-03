import express from 'express';
import { testEnvironmentVariable } from '../settings';
import { messagesPage } from './messages';

const indexRouter = express.Router();

/* GET home page. */
indexRouter.get('/', (req, res) => res.status(200).json({ message: ('Welcome to Xanbilak 1st API, ' + testEnvironmentVariable) }));
indexRouter.get('/messages', messagesPage);

export default indexRouter;
