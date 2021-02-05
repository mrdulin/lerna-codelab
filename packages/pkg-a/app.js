const express = require("express");
const chalk = require("chalk");
const app = express();

app.get("/", (req, res) => {
  res.sendStatus(200);
});

app.listen(3000, () =>
  console.log(chalk.green("HTTP server started at http://localhost:3000"))
);
