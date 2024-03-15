const connectTomongo = require("./db");

const express = require("express");
connectTomongo();

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello Shashankkkkk!");
});

app.listen(port, () => {
  console.log(`Example app listening at  http://localhost:${port}`);
});
