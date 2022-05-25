const db = require("../database");

module.exports = class Servico {
    static getAll(idUser) {
        const query = `SELECT * FROM analytcoz.servicos WHERE usuario_criou = $1`;

        return db.query(query, [idUser]);
    }

    static get(id) {
        const query = `SELECT * FROM analytcoz.servicos WHERE id = $1`;

        return db.query(query, [id]);
    }

    static insert(descricao, valor, tempo_gasto, usuario_criou) {
        const query = `
        INSERT INTO analytcoz.servicos(
            descricao,
            valor,
            tempo_gasto,
            usuario_criou
        ) VALUES(
            $1,
            $2,
            $3,
            $4
        )
        `
        
        return db.query(query, [descricao, valor, tempo_gasto, usuario_criou]);
    }

    static update() {

    }
}