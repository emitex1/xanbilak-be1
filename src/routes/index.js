import express from 'express';
import { testEnvironmentVariable } from '../settings';

const indexRouter = express.Router();

/* GET home page. */
indexRouter.get('/', (req, res) => res.status(200).json({ message: ('Welcome to Xanbilak 1st API, ' + testEnvironmentVariable) }));

export default indexRouter;
