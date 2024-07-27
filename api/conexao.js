import mysql from "mysql";

export const conexao = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "crud_nodejs",
})