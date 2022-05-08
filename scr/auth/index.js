require("dotenv").config();
const jwt = require("jsonwebtoken");

function auth(req, res, next) {
    const [type, token] = req.headers.authorization.split(" ");

    if (type != "Bearer" || !token) return res.status(401);

    jwt.verify(token, process.env.API_TOKEN, (err, user) => {
        if (err) return res.status(403).send("Token inválido");

        req.auth = user;
        next();
    });
}

module.exports = auth;