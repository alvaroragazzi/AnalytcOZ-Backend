require("dotenv").config();
const express = require("express");
const router = express.Router();
const db = require("../database");
const auth = require("../middlewares/checkAuth");

router.post("/cadastrarCliente", auth, async function(req, res) {
    const result = await db.query(
        "SELECT * FROM analytcoz.usuarios USU WHERE USU.login = $1 AND USU.senha = analytcoz.crypt($2, USU.senha)",
        [user, pass]
    );
});

module.exports = router;