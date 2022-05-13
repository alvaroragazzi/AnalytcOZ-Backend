function auth(req, res, next) {
    const auth = req.session.authenticated;
   
    if (!auth) {
        res.writeHead(403, {"Location":`${req.protocol}://${req.headers["host"]}/login`});
        return res.end();
    }

    next();
}

module.exports = auth;