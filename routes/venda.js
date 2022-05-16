require("dotenv").config();
const express = require("express");
const router = express.Router();
const db = require("../database");
const auth = require("../middlewares/checkAuth");

router.post("/cadastrarServico", auth, async function(req, res) {
    
});

module.exports = router;