import dotenv from 'dotenv';
dotenv.config();
// const result = dotenv.config();
 
// if (result.error) {
//   throw result.error
// }
 
// console.log(result.parsed);

export const testEnvironmentVariable = process.env.TEST_ENV_VARIABLE;
export const connectionString = process.env.CONNECTION_STRING;
