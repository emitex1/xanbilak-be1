import Model from '../models/model';

const messagesModel: any = new Model('messages');

export const messagesPage = async (req: any, res: any) => {
  try {
    const data: any = await messagesModel.select('name, message');
    res.status(200).json({ messages: data.rows });
  } catch (err) {
    res.status(200).json({ messages: err.stack });
  }
};

export const addMessage = async (req: any, res: any) => {
  const { name, message } = req.body;
  const columns: string = 'name, message';
  const values: string = `'${name}', '${message}'`;
  try {
    const data: any = await messagesModel.insertWithReturn(columns, values);
    res.status(200).json({ messages: data.rows });
  } catch (err: any) {
    res.status(200).json({ messages: err.stack });
  }
};
