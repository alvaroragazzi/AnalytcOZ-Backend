const ServicoModel = require("../models/servico");

exports.getAll = async function(req, res, next) {
    
}

exports.get = async function(req, res, next) {

}

exports.insert = async function(req, res, next) {
    try {
        const info = req.body;
        const descricao = info.descricao;
        const valor = info.valor;
        const tempo_gasto = info.tempo_gasto;
        const usuario_criou = req.session.authenticated.id;

        await ServicoModel.insert(descricao, valor, tempo_gasto, usuario_criou);

        return res.sendStatus(201);
    } catch {
        return res.sendStatus(500);
    }
}

exports.update = async function(req, res, next) {
    
}