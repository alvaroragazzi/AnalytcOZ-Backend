const ProdutoModel = require("../models/produto");

exports.getAll = async function(req, res) {
    try {
        const result = await ProdutoModel.getAll(req.session.authenticated.id);

        return res.send(result);
    } catch {
        return res.sendStatus(500);
    }
}

exports.get = async function(req, res) {
    try {
        const result = await ProdutoModel.get(req.session.authenticated.id, req.params.id);

        return res.send(result);
    } catch {
        return res.sendStatus(500);
    }
}

exports.insert = async function(req, res) {
    try {
        const info = req.body;
        const nome = info.nome;
        const valor = info.valor;
        const usuario_criou = req.session.authenticated.id;

        await ProdutoModel.insert(nome, valor, usuario_criou);

        return res.sendStatus(201);
    } catch {
        return res.sendStatus(500);
    }
}

exports.update = async function(req, res) {
    
}