const router = require("express").Router();
const UsuarioController = require("../controllers/usuario");
const checkAuth = require("../middlewares/checkAuth");

router.get("/login", UsuarioController.login);
router.get("/logout", checkAuth, UsuarioController.logout);

module.exports = router;