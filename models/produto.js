const db = require("../database");

module.exports = class Produto {
    static getAll(usuario_criou) {
        const query = `SELECT * FROM analytcoz.produtos WHERE usuario_criou = $1`;

        return db.query(query, [usuario_criou]);
    }

    static get(usuario_criou, id) {
        const query = `SELECT * FROM analytcoz.produtos WHERE usuario_criou = $1 AND id = $2`;

        return db.query(query, [usuario_criou, id]);
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