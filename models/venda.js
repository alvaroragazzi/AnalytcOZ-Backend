const db = require("../database");

module.exports = class Venda {
    static getAll(idUser) {

    }

    static get(id) {

    }

    static insert() {
        const query = `
        INSERT INTO analytcoz.vendas(
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
        
        return db.query(query, []);
    }

    static update() {

    }
}