require("dotenv").config();
const express = require("express"); // commonjs
const app = express(); // app express
const configViewEngine = require("./config/viewEngine");
const webRouter = require("./routes/web");

const port = process.env.PORT || 8888; // prot
const hostname = process.env.HOSTNAME;
// config template engine
configViewEngine(app);
// khai báo router
app.use("/", webRouter);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
