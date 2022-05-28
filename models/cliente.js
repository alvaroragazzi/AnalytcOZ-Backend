const db = require("../database");

module.exports = class Cliente {
    static getAll(usuario_criou) {
        const query = `SELECT * FROM analytcoz.clientes WHERE usuario_criou = $1`;

        return db.query(query, [usuario_criou]);
    }

    static get(usuario_criou, id) {
        const query = `SELECT * FROM analytcoz.produtos WHERE usuario_criou = $1 AND id = $2`;

        return db.query(query, [usuario_criou, id]);
    }

    static insert(nome, cpfcnpj, email, cidade, bairro, logradouro, cep, usuario_criou) {
        nome = decodeURI(nome);
        cidade = decodeURI(cidade);
        bairro = decodeURI(bairro);
        logradouro = decodeURI(logradouro);

        const query = `
        INSERT INTO analytcoz.clientes(
            nome,
            cpfcnpj,
            email,
            cidade,
            bairro,
            logradouro,
            cep,
            usuario_criou
        ) VALUES(
            $1,
            $2,
            $3,
            $4,
            $5,
            $6,
            $7,
            $8
        )
        `

        return db.query(query, [nome, cpfcnpj, email, cidade, bairro, logradouro, cep, usuario_criou]);
    }

    static update() {

    }
}