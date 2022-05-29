const ItemvendaModel = require("../models/itemvenda");

exports.insert = async function(id_venda, itens) {
    try {
        const itemList = [];

        itens.map((item) => {
            itemList.push([
                id_venda,
                item.categoria == "Produto" ? item.id : null,
                item.categoria == "Serviço" ? item.id : null,
                item.qtd
            ])
        })

        return await ItemvendaModel.insert(itemList);
    } catch (error) {
        console.log(error)
        return false;
    }
}

exports.update = async function(req, res) {
    
}