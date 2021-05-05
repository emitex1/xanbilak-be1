import express from 'express';
import { testEnvironmentVariable } from '../settings';
import { messagesPage } from './messages';
import { modifyMessage, performAsyncAction } from '../middleware';
import { addMessage } from '../controllers/messages';

const indexRouter = express.Router();

/* GET home page. */
indexRouter.get('/', (req, res) => res.status(200).json({ message: (`Welcome to Xanbilak 1st API, ${testEnvironmentVariable}`) }));
indexRouter.get('/messages', messagesPage);
indexRouter.post('/messages', modifyMessage, performAsyncAction, addMessage);

export default indexRouter;
