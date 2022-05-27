const db = require("../database");

module.exports = class Servico {
    static getAll(usuario_criou) {
        const query = `SELECT * FROM analytcoz.servicos WHERE usuario_criou = $1`;

        return db.query(query, [usuario_criou]);
    }

    static get(usuario_criou, id) {
        // verificando o ID do usuário logado para prevenir acesso de informações de outros usuários
        const query = `SELECT * FROM analytcoz.servicos WHERE usuario_criou = $1 AND id = $2`;

        return db.query(query, [usuario_criou, id]);
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