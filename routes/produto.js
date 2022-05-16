require("dotenv").config();
const express = require("express");
const router = express.Router();
const db = require("../database");
const auth = require("../middlewares/checkAuth");

router.post("/cadastrarProduto", auth, async function(req, res) {
    const info = req.body;
    const nome = info.nome;
    const valor = info.valor;
    const usuario_criou = req.session.authenticated.id;

    try {
        const query = `
        INSERT INTO analytcoz.produtos(
            nome,
            valor,
            usuario_criou
        ) VALUES(
            $1,
            $2,
            $3
        )
        `

        await db.query(query, [nome, valor, usuario_criou]);

        return res.sendStatus(201);
    } catch(error) {
        return res.sendStatus(500);
    }
});

module.exports = router;