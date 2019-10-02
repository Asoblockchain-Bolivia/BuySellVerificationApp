const Express = require("express");
const Router = Express.Router();
const Register = require("../services/register");
const passport = require("passport");
require("../utils/strategies/facebook");

Router.get("/facebook", passport.authenticate("facebook", { scope: "email" }));

Router.get("/callback", (req, res, next) => {
  res.send(req);
});

module.exports = Router;
