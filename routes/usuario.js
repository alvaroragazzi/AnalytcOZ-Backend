require("dotenv").config();
const express = require("express");
const router = express.Router();
const db = require("../database");
const auth = require("../middlewares/checkAuth");

router.get("/login", async function(req, res) {
    if (req.session.authenticated)
        return res.sendStatus(403);
    else if (!req.headers.authorization)
        return res.sendStatus(400);

    const [type, hash] =  req.headers.authorization.split(" ");
    const [user, pass] = Buffer.from(hash, "base64").toString().split(":");

    if (type != "Basic" || !user || !pass) 
        return res.sendStatus(400);

    try {
        const result = await db.query(
          "SELECT * FROM analytcoz.usuarios USU WHERE USU.login = $1 AND USU.senha = analytcoz.crypt($2, USU.senha)",
          [user, pass]
        );

        if (result.rows.length > 0) {
            req.session.authenticated = {
                id: result.rows[0]["id"],
                nome: result.rows[0]["nome"]
            };

            return res.send(req.session.authenticated);
        } else {
            return res.status(401).send("Usuário ou senha incorreto(s)");
        }
    } catch (error) {
        return res.status(500).send("Ocorreu um erro");
    }
});

router.post("/logout", auth, function(req, res) {
    req.session.destroy();
    return res.sendStatus(200);
})

router.get("/checkAuth", auth, function(req, res) {
    return res.sendStatus(200);
});

module.exports = router;