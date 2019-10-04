const Express = require("express");
const Router = Express.Router();
const Register = require("../services/register");
const passport = require("passport");
require("../utils/strategies/facebook");

Router.get("/facebook", function(req, res, next) {
  Register.facebook();
});

Router.get("/callback", function(req, res, next) {
  Register.callback();
});

module.exports = Router;
