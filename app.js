//// app.js
const express = require("express");
require("./mongoConfig"); 
const app = express();

app.use(express.urlencoded({ extended: false }));

const indexRouter = require("./index");
app.use("/", indexRouter);

app.listen(3000, () => console.log("running"));
