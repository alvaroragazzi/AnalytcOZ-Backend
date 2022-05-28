const router = require("express").Router();
const CustoController = require("../controllers/custo");

router.get("/", CustoController.getAll);
router.get("/:id", CustoController.get);
router.post("/", CustoController.insert);

module.exports = router;