const express = require("express");
const app = express();
const cors = require("cors");
const logger = require("morgan");
const transactionController = require("./controllers/budget-controller.js");
app.use(express.json());

app.use(cors());

app.use(logger('dev'))

app.use("/transactions", transactionController)

app.use((req, res, next) => {
    console.log("This code runs for every request");
    next();
});

app.get("/", (req, res) => {
    res.send("Welcome to the Budget App");
})

//404 page
app.get("*", (req, res) => {
    res.status(404).json({ error: "Page not found" });
})

module.exports = app;