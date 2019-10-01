const Express = require("express");
const Router = Express.Router();
const Register = require("../services/register");

Router.get("/facebook", (req, res, next) => {
  Register.facebook();
  res.send("Login right");
});

Router.get("/callback", (req, res, next) => {
  Register.callback();
  res.send("Calback right");
});

module.exports = Router;
