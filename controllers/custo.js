const CustoModel = require("../models/custo");

exports.getAll = async function(req, res) {
    try {
        const result = await CustoModel.getAll(req.session.authenticated.id);

        return res.send(result.rows);
    } catch {
        return res.sendStatus(500);
    }
}

exports.get = async function(req, res) {
    try {
        const result = await CustoModel.get(req.session.authenticated.id, req.params.id);

        return res.send(result.rows);
    } catch {
        return res.sendStatus(500);
    }
}

exports.insert = async function(req, res) {
    try {
        const info = req.body;
        const data_lancamento = info.data_lancamento;
        const descricao = info.descricao;
        const valor = info.valor;
        const fornecedor = info.fornecedor;
        const usuario_criou = req.session.authenticated.id;

        await CustoModel.insert(data_lancamento, descricao, valor, fornecedor, usuario_criou);

        return res.sendStatus(201);
    } catch {
        return res.sendStatus(500);
    }
}

exports.update = async function(req, res) {
    
}