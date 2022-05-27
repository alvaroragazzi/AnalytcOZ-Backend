const router = require("express").Router();
const ClienteController = require("../controllers/cliente");

router.get("/", ClienteController.getAll);
router.get("/:id", ClienteController.get);
router.post("/", ClienteController.insert);

module.exports = router;