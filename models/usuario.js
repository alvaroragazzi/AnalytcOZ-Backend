const db = require("../database");

module.exports = class Usuario {
    static login(usuario, senha) {
        const query = `SELECT * FROM analytcoz.usuarios USU WHERE USU.login = $1 AND USU.senha = analytcoz.crypt($2, USU.senha)`;

        return db.query(query, [usuario, senha]);
    }
}