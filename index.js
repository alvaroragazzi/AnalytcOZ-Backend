require("dotenv").config();
const express = require("express");
const app = express();
const sessions = require("express-session");

const ProdutoRoutes = require("./routes/produto");
const ServicoRoutes = require("./routes/servico");
const UsuarioRoutes = require("./routes/usuario");
const VendaRoutes = require("./routes/venda");
const ClienteRoutes = require("./routes/cliente");
const CustoRoutes = require("./routes/custo");

const checkAuth = require("./middlewares/checkAuth");

app.use(sessions({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: false,
    cookie: { 
        maxAge: 600000 * 10,
        sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
        secure: process.env.NODE_ENV === "production",
        httpOnly: true
    }
}));

app.use(require("cors")({origin: ["http://localhost:3000", "http://analytcoz.herokuapp.com", "https://analytcoz.herokuapp.com"], credentials: true}), express.json(), express.urlencoded({extended: true}));

app.use("/produto", checkAuth, ProdutoRoutes);
app.use("/servico", checkAuth, ServicoRoutes);
app.use("/venda", checkAuth, VendaRoutes);
app.use("/cliente", checkAuth, ClienteRoutes);
app.use("/custo", checkAuth, CustoRoutes);
app.use("/usuario", UsuarioRoutes);

app.listen(process.env.PORT || 8080, () => console.log("Servidor inciado"));