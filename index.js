require("dotenv").config();
const express = require("express");
const app = express();
const sessions = require("express-session");

app.use(sessions({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: false,
    cookie: { 
        maxAge: 30000,
        sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
        secure: process.env.NODE_ENV === "production",
    }
}));

app.use(require("cors")({origin: ["http://localhost:3000", "http://analytcoz.herokuapp.com", "https://analytcoz.herokuapp.com"], credentials: true}), express.json());
app.use("/", require("./routes/usuario"));

app.listen(process.env.PORT || 8080, () => console.log("Servidor inciado"));