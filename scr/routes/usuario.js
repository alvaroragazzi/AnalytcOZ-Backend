require("dotenv").config();
const express = require("express");
const router = express.Router();
const db = require("../database");
const jwt = require("jsonwebtoken");
const auth = require("../auth");

router.get("/login", async function(req, res) {
    const [type, hash] =  req.headers.authorization ? req.headers.authorization.split(" ") : null;
    const [user, pass] = hash ? Buffer.from(hash, "base64").toString().split(":") : null;

    if (type != "Basic") 
        return res.sendStatus(400);
    else if (!user)  
        return res.status(400).send("Usuário ou senha não definidos");

    try {
        const result = await db.query(
          "SELECT * FROM analytcoz.usuarios USU WHERE USU.login = $1 AND USU.senha = crypt($2, USU.senha)",
          [user, pass]
        );

        if (result.rows.length > 0) {
            const token = jwt.sign({ id: result.rows[0].id }, process.env.API_TOKEN);

            return res.send([{
                id: result.rows[0].id,
                nome: result.rows[0].nome,
                token
            }]);
        } else {
            return res.status(401).send("Usuário ou senha incorreto(s)");
        }
    } catch (error) {
        return res.status(500).send("Ocorreu um erro");
    }
})

router.get("/refreshToken", auth, async function(req, res){
    
})

module.exports = router;