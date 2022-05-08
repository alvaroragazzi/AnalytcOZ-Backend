const express = require("express");
const app = express();

app.use(require("cors")(), express.json());
app.use("/", require("./routes/usuario"));

app.listen(8080, () => console.log("Servidor inciado"));