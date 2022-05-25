const UsuarioModel = require("../models/usuario");
const checkAuth = require("../middlewares/checkAuth");

exports.login = async function(req, res, next) {
    try {
        if (req.session.authenticated)
            return res.sendStatus(403);
        else if (!req.headers.authorization)
            return res.sendStatus(400);

        const [type, hash] =  req.headers.authorization.split(" ");
        const [usuario, senha] = Buffer.from(hash, "base64").toString().split(":");

        if (type != "Basic" || !usuario || !senha) return res.sendStatus(400);

        const result = await UsuarioModel.login(usuario, senha);

        if (result.rows.length > 0) {
            req.session.authenticated = {
                id: result.rows[0]["id"],
                nome: result.rows[0]["nome"]
            };

            return res.send(req.session.authenticated);
        } else {
            return res.sendStatus(401);
        }
    } catch(err) {
        console.log(err)
        return res.sendStatus(500);
    }
}

exports.logout = async function(req, res, next) {
    req.session.destroy();
    return res.sendStatus(200);
}