const express = require("express"); // commonjs
const app = express(); // app express
const port = 8080; // prot

// khai báo router
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/abc", (req, res) => {
  res.send("Check");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
