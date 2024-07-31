import mysql from 'mysql2/promise';

const createPool = () => {
  try {
    console.log('Tentando criar uma pool de conexões com o banco de dados...');
    const pool = mysql.createPool({
      connectionLimit: 10,
      host: 'localhost',
      user: 'root',
      password: '123456',
      database: 'crud',
    });

    // Testar a conexão
    pool.getConnection()
      .then((connection) => {
        console.log('Conexão com o banco de dados estabelecida com sucesso.');
        connection.release(); // Liberar a conexão de volta ao pool
      })
      .catch((err) => {
        console.error('Erro ao conectar com o banco de dados:', err);
      });

    return pool;
  } catch (err) {
    console.error('Erro ao criar a pool de conexões:', err);
    throw err;
  }
};

// Exportar a pool de conexões
export const mysqlConfig = createPool();