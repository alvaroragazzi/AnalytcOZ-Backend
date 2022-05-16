function auth(req, res, next) {
    const auth = req.session.authenticated;
   
    if (!auth) {
        return res.sendStatus(403);
    }

    next();
}

module.exports = auth;