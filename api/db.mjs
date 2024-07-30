import mysql from 'mysql';

// Configuração do pool de conexões MySQL
const mysqlConfig = mysql.createPool({
  connectionLimit: 100,
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'crud'
});

export { mysqlConfig };
