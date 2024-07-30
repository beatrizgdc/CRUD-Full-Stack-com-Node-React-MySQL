import mysql from "mysql";

export const db = mysql.createConnection({
  host: 'localhost', 
  port: 3307,        
  user: 'root',      
  password: '123456', 
  database: 'crud',
});
