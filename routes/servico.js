const router = require("express").Router();
const ServicoController = require("../controllers/servico");

router.get("/", ServicoController.getAll);
router.get("/:id", ServicoController.get);
router.post("/", ServicoController.insert);

module.exports = router;