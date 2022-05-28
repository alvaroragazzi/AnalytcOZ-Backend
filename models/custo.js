const db = require("../database");

module.exports = class Custo {
    static getAll(usuario_criou) {
        const query = `SELECT * FROM analytcoz.custos WHERE usuario_criou = $1`;

        return db.query(query, [usuario_criou]);
    }

    static get(usuario_criou, id) {
        const query = `SELECT * FROM analytcoz.custos WHERE usuario_criou = $1 AND id = $2`;

        return db.query(query, [usuario_criou, id]);
    }

    static insert(data_lancamento, descricao, valor, fornecedor, usuario_criou) {
        const query = `
        INSERT INTO analytcoz.custos(
            data_lancamento,
            descricao,
            valor,
            fornecedor,
            usuario_criou
        ) VALUES(
            $1,
            $2,
            $3,
            $4,
            $5
        )
        `
        
        return db.query(query, [data_lancamento, descricao, valor, fornecedor, usuario_criou]);
    }

    static update() {

    }
}