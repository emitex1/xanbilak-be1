import axios from 'axios';

export const modifyMessage = (req: any, res: any, next: any) => {
  req.body.message = `SAYS: ${req.body.message}`;
  next();
};

export const performAsyncAction = async (req: any, res: any, next: any) => {
  try {
    await axios.get('https://picsum.photos/id/0/info');
    next();
  } catch (err: any) {
    next(err);
  }
};
