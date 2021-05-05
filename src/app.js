import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import createError from 'http-errors';

import indexRouter from './routes/index';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/v1', indexRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  res.status(err.status || 400).json({
    message: err && err.message ? err.message : 'Unknown Error',
    error: req.app.get('env') === 'development' ? err.stack : {}
  });

  // render the error page
  // res.render('error');
});

export default app;
