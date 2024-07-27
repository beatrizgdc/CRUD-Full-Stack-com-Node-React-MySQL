const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost', 
  port: 3306,        
  user: 'root',      
  password: 'senha', 
  database: 'nome_do_banco'
});

connection.connect(err => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conectado ao banco de dados!');
});

module.exports = connection;
