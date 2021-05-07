export const createMessageTable: string = `
DROP TABLE IF EXISTS messages;
CREATE TABLE IF NOT EXISTS messages (
  id SERIAL PRIMARY KEY,
  name VARCHAR DEFAULT '',
  message VARCHAR NOT NULL
  )
  `;

export const insertMessages: string = `
INSERT INTO messages(name, message)
VALUES ('Emad', 'first message'),
      ('Arian', 'second message')
`;

export const dropMessagesTable: string = 'DROP TABLE messages';
