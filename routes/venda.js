const router = require("express").Router();
const VendaController = require("../controllers/venda");

router.post("/", VendaController.insert);

module.exports = router;