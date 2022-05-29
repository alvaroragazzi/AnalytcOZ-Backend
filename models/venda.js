const db = require("../database");

module.exports = class Venda {
    static getAll(idUser) {

    }

    static get(id) {

    }

    static insert(usuario_criou, cliente_venda) {
        const query = `
        INSERT INTO analytcoz.vendas(
            usuario_criou,
            cliente_venda
        ) 
        SELECT $1, id FROM analytcoz.clientes
        WHERE id = $2 AND usuario_criou = $1
        RETURNING id
        `
        // SELECT para checar se o cliente informado na requisição foi cadastrado pelo usuário logado para prevenir cadastro de vendas no nome de clientes criados por outros usuários
        
        return db.query(query, [usuario_criou, cliente_venda]);
    }

    static update() {

    }
}