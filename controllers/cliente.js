const ClienteModel = require("../models/produto");

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

exports.insert = async function(req, res, next) {
    try {
        await ClienteModel.insert();
    } catch {
        return res.sendStatus(500);
    }
}

exports.update = async function(req, res, next) {
    
}