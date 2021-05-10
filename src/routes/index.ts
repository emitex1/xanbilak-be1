import express from 'express';
import { testEnvironmentVariable } from '../settings';

/** Middlewares */
import { modifyMessage, performAsyncAction } from '../middleware';

/** Controllers */
import { messagesPage, addMessage } from '../controllers/messages';
import { readShoppingItems } from '../controllers/shoppingItems';

const indexRouter = express.Router();

indexRouter.get('/', (req, res) => res.status(200).json({ message: (`Welcome to Xanbilak 1st API, Message : ${testEnvironmentVariable}`) }));
indexRouter.get('/messages', messagesPage);
indexRouter.post('/messages', modifyMessage, performAsyncAction, addMessage);
indexRouter.get('/sic', readShoppingItems);

export default indexRouter;
