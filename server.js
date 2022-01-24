const express = require("express");
const db = require("./db");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 4000;

app.listen(port, () => console.log("Server is running on port", port));
