const ClienteModel = require("../models/cliente");

exports.getAll = async function(req, res, next) {
    try {
        const result = ClienteModel.getAll(req.session.authenticated.id);

        return res.send(result);
    } catch {
        return res.sendStatus(500);
    }
}

exports.get = async function(req, res, next) {
    try {
        const result = ClienteModel.getAll(req.session.authenticated.id, req.params.id);

        return res.send(result);
    } catch {
        return res.sendStatus(500);
    }
}

exports.insert = async function(req, res) {
    try {
        const info = req.body;
    
        const nome = info.nome;
        const cpfcnpj = info.cpfcnpj;
        const email = info.email;
        const cidade = info.cidade;
        const bairro = info.bairro;
        const logradouro = info.logradouro;
        const cep = info.cep;
        const usuario_criou = req.session.authenticated.id;

        await ClienteModel.insert(nome, cpfcnpj, email, cidade, bairro, logradouro, cep, usuario_criou);

        return res.sendStatus(201);
    } catch(err) {
        console.log(err);
        return res.sendStatus(500);
    }
}

exports.update = async function(req, res, next) {
    
}