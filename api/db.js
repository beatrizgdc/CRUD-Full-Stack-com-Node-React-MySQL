
const express = require('express');
const http = require('http');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const server = http.createServer(app);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configuração do pool de conexões MySQL
const db = mysql.createPool({
  connectionLimit: 100,
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'crud'
});

// Rota para verificar o status do banco de dados
app.get('/api/database/status', (req, res) => {
  console.log('API CALL: /api/database/status');

  db.getConnection((err, connection) => {
    if (err) {
      console.error('Error getting MySQL connection from pool:', err);
      return res.status(500).json({
        Time: new Date().toISOString(),
        DatabaseStatus: 'Down'
      });
    }

    connection.query('SELECT SettingValue FROM your_database_table WHERE SettingKey = ?', ['DatabaseStatus'], (err2, rows) => {
      connection.release(); // Libere a conexão de volta para o pool

      if (err2) {
        console.error('Error executing query:', err2);
        return res.status(500).json({
          Time: new Date().toISOString(),
          DatabaseStatus: 'Down'
        });
      }

      // Verifique se a consulta retornou resultados
      const dbStatus = (rows.length > 0 && rows[0].SettingValue == 1) ? 'Up' : 'Down';

      res.json({
        Time: new Date().toISOString(),
        DatabaseStatus: dbStatus
      });
    });
  });
});

// Inicia o servidor na porta 3000
server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
