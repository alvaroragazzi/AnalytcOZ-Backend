const express = require("express");
const app = express();

app.use(require("cors")({origin: ["https://analytcoz.herokuapp.com", "http://analytcoz.herokuapp.com", "http://localhost:3000"]}), express.json());
app.use("/", require("./routes/usuario"));

app.listen(8080, () => console.log("Servidor inciado"));