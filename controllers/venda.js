const VendaModel = require("../models/venda");
const ItemvendaController = require("../controllers/itemvenda");

exports.getAll = async function(req, res, next) {
    
}

exports.get = async function(req, res, next) {

}

exports.insert = async function(req, res, next) {
    try {
        const dados = req.body;
        const cliente_venda = dados.cliente_venda;
        const itens = dados.itens;

        const venda = await VendaModel.insert(req.session.authenticated.id, cliente_venda);

        if (venda.rows.length == 0) return res.sendStatus(403);

        const result = await ItemvendaController.insert(venda.rows[0].id, itens);

        return res.sendStatus(201);
    } catch(error) {
        console.log(error);
    }
}

exports.update = async function(req, res, next) {
    
}