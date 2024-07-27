import mysql from "mysql";

export const conexao = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    databese: "crud_nodejs"
})