
const express = require("express");
const app = express();
const dbConfig = require("./db");

const PenghuniRoute = require("./routes/PenghuniRoute");

app.use(express.json());

app.use("/api/penghuni", PenghuniRoute);
const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Node Server Start using Nodemon"));