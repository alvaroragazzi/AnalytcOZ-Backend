const db = require("../database");

module.exports = class Produto {
    static getAll(idUser) {
        const query = `SELECT * FROM analytcoz.produtos WHERE usuario_criou = $1`;

        return db.query(query, [idUser]);
    }

    static get(id) {
        const query = `SELECT * FROM analytcoz.produtos WHERE id = $1`;

        return db.query(query, [id]);
    }

    static insert(nome, valor, usuario_criou) {
        const query = `
        INSERT INTO analytcoz.produtos(
            nome,
            valor,
            usuario_criou
        ) VALUES(
            $1,
            $2,
            $3
        )
        `

        return db.query(query, [nome, valor, usuario_criou]);
    }

    static update() {

    }
}