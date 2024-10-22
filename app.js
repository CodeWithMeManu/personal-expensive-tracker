const express = require("express");
const bodyParser = require("body-parser");
const transactionRoutes = require("./routes/transactionRoutes");
const categoryRoutes = require("./routes/categoryRoutes");

const app = express();
app.use(bodyParser.json());

app.use("/api/transactions", transactionRoutes);
app.use("/api/categories", categoryRoutes);

module.exports = app;
