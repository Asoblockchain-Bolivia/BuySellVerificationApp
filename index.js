const express = require("express");
const app = express();
require("dotenv").config();
const AuthRouter = require("./src/router/auth");
const RegisterRouter = require("./src/router/register");

app.use(express.urlencoded());
app.use(express.static(__dirname + "/public"));
app.get("/", (req, res) => {
  res.render("index");
});
app.use("/auth", AuthRouter);
app.use("/register", RegisterRouter);

const server = app.listen(process.env.PORT, () => {
  console.log(`Server running in: http://localhost:${server.address().port}`);
});
