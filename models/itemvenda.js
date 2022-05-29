const db = require("../database");
const format = require("pg-format");
const { database } = require("pg/lib/defaults");

module.exports = class Itemvenda {

    static insert(itens) {
        var query = `
        INSERT INTO analytcoz.itemvenda(
            id_venda,
            id_produto,
            id_servico,
            quantidade
        ) VALUES %L
        `

        return db.query(format(query, itens), []);
    }
}