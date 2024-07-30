import { mysqlConfig } from '../db.mjs';

export const getUsers = (_, res) => {
  const q = "SELECT * FROM usuarios";

  mysqlConfig.query(q, (err, data) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).json({ error: 'Error executing query' });
    }

    return res.status(200).json(data);
  });
};
