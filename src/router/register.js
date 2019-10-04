const Express = require("express");
const Router = Express.Router();
const Register = require("../services/register");
const passport = require("passport");
require("../utils/strategies/facebook");

Router.get("/facebook", function(req, res, next) {
  Register.facebook(req, res, next);
});

Router.get("/callback", function(req, res, next) {
  Register.callback(req, res, next);
});

module.exports = Router;
