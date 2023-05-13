"use strict";

const express = require("express");
const app = express();
const { connection } = require("./src/database/connection");
require("dotenv").config();
const port = process.env.PORT;
const routesR = require("./src/routes/storage.routes");

connection();

app.use(express.urlencoded({ extended: false }));

app.use(express.json());
app.use("/api", routesR);

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
