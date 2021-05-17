import express from 'express';
import { testEnvironmentVariable } from '../settings';

/** Middlewares */
//import { modifyMessage, performAsyncAction } from '../middleware';

/** Controllers */
import { readShoppingListItems, createShoppingItem } from '../controllers/shoppingItems';

const indexRouter = express.Router();

indexRouter.get('/', (req, res) => res.status(200).json({ message: (`Welcome to Xanbilak 1st API, Message : ${testEnvironmentVariable}`) }));
indexRouter.get('/shoppingList', readShoppingListItems);
indexRouter.post('/shoppingItem/create', createShoppingItem);


export default indexRouter;
