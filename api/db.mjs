import mysql from 'mysql2/promise';

// Configura o pool de conexões
export const mysqlConfig = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'crud',
});
