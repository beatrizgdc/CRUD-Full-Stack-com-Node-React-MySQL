import { conexao } from "../conexao.js";

export const getUsers = (_, res) => {
    const q = "SELECT * FROM usuarios";

    conexao.query(q, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
};