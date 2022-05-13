require("dotenv").config();
const express = require("express");
const app = express();
const sessions = require("express-session");

app.use(sessions({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 30000 }
}));

app.use(require("cors")({origin: ["http://localhost:3000", "http://analytcoz.herokuapp.com", "https://analytcoz.herokuapp.com"], credentials: true}), express.json());
app.use("/", require("./routes/usuario"));

app.listen(process.env.PORT || 8080, () => console.log("Servidor inciado"));