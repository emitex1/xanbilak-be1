import { pool } from '../models/pool';
import {
  insertMessages,
  dropMessagesTable,
  createMessageTable,
} from './queries';

export const executeQueryArray = async (arr: Array<string>) => new Promise<void>(resolve => {
  const stop: number = arr.length;
  arr.forEach(async (q: string, index: number) => {
    await pool.query(q);
    if (index + 1 === stop) resolve();
  });
});

export const dropTables = () => executeQueryArray([ dropMessagesTable ]);
export const createTables = () => executeQueryArray([ createMessageTable ]);
export const insertIntoTables = () => executeQueryArray([ insertMessages ]);
