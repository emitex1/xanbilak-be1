import { pool } from './pool';

class Model {
  pool: any;
  table: any;

  constructor(table: any) {
    this.pool = pool;
    this.table = table;
    this.pool.on('error', (err: any, client: any) => `Error, ${err}, on idle client${client}`);
  }

  async select(columns: string, clause?: string) {
    let query = `SELECT ${columns} FROM ${this.table}`;
    if (clause) query += clause;
    return this.pool.query(query);
  }

  async insertWithReturn(columns: any, values: any) {
    const query = `
          INSERT INTO ${this.table}(${columns})
          VALUES (${values})
          RETURNING id, ${columns}
      `;
    return this.pool.query(query);
  }
}

export default Model;
