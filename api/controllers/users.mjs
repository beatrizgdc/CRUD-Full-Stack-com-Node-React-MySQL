import mysqlConfig from '../db.mjs';  

export const getUsers = async (_, res) => {
  try {
    const [rows] = await mysqlConfig.query('SELECT * FROM usuarios');
    res.status(200).json(rows);
  } catch (err) {
    console.error('Error executing query:', err);
    res.status(500).json({ error: 'Error executing query' });
  }
};
