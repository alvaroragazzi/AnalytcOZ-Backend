const router = require("express").Router();
const ProdutoController = require("../controllers/produto");

router.get("/", ProdutoController.getAll);
router.get("/:id", ProdutoController.get);
router.post("/", ProdutoController.insert);

module.exports = router;