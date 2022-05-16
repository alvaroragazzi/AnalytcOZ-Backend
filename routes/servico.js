require("dotenv").config();
const express = require("express");
const router = express.Router();
const db = require("../database");
const auth = require("../middlewares/checkAuth");

router.post("/cadastrarServico", auth, async function(req, res) {
    const info = req.body;
    const descricao = info.descricao;
    const valor = info.valor;
    const tempo_gasto = info.tempo_gasto;
    const usuario_criou = req.session.authenticated.id;

    try {
        const query = `
        INSERT INTO analytcoz.servicos(
            descricao,
            valor,
            tempo_gasto,
            usuario_criou
        ) VALUES(
            $1,
            $2,
            $3,
            $4
        )
        `

        await db.query(query, [descricao, valor, tempo_gasto, usuario_criou]);
        return res.sendStatus(201);
    } catch(error) {
        return res.sendStatus(500);
    }
});

module.exports = router;