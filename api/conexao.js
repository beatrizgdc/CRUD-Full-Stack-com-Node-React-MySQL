import mysql from "mysql2";

export const conexao = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "crud_nodejs",
});

conexao.connect(err => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conectado ao banco de dados.');
});
