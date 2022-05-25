const ProdutoModel = require("../models/produto");

exports.getAll = async function(req, res, next) {
    
}

exports.get = async function(req, res, next) {

}

exports.insert = async function(req, res, next) {
    try {
        const info = req.body;
        const nome = info.nome;
        const valor = info.valor;
        const usuario_criou = req.session.authenticated.id;

        const response = await ProdutoModel.insert(nome, valor, usuario_criou);

        return res.sendStatus(201);
    } catch {
        return res.sendStatus(500);
    }
}

exports.update = async function(req, res, next) {
    
}