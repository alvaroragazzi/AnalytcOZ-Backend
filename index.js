require("dotenv").config();
const express = require("express");
const app = express();
const sessions = require("express-session");

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

app.use("/", require("./routes/usuario"));
app.use("/", require("./routes/produto"));
app.use("/", require("./routes/servico"));

app.listen(process.env.PORT || 8080, () => console.log("Servidor inciado"));