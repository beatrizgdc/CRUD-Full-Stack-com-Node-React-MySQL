import mysql from "mysql";

export const conexao = mysql.createConnection({
  host: 'localhost', 
  port: 3306,        
  user: 'root',      
  password: '123456', 
  database: 'nome_do_banco',
});
